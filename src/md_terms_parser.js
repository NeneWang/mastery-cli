const fs = require('fs');
const { Term, DeckMask, TermStorage } = require('./structures.js');
const { getDirAbsoluteUri } = require('./utils_functions.js');


function parseMarkdownCards(filePath) {
    const lines = fs.readFileSync(filePath, 'utf-8').split(/\r?\n/);

    const result = {
        title: '',
        entries: []
    };

    let i = 0;
    let currentEntry = null;

    let last_connected_paragraph = '';
    let last_connected_paragraph_line = 0;

    while (i < lines.length) {
        const line = lines[i].trim();

        // Title
        if (!result.title && line.startsWith('# ')) {
            result.title = line.slice(2).trim();
            i++;
            continue;
        }

        // New entry
        if (line.startsWith('####')) {
            if (currentEntry) {
                result.entries.push(currentEntry);
            }
            const header = line.replace(/^#+/, '').trim()
            currentEntry = {
                header: header,
                description: '',
                prompt: header,
                answer: '',
                reference_line: i + 1
            };
            i++;
            continue;
        }

        if (line.startsWith('?x')) {
            // if we encouner this without a new entry, then use the line above as the description
            if (!currentEntry && i > 0) {
                let previousLine = lines[i - 1].trim();
                currentEntry = {
                    header: previousLine,
                    description: last_connected_paragraph,
                    prompt: previousLine,
                    answer: '',
                    reference_line: i
                };
            }
        }

        // if the line contains :: then => description::answer
        if (line.includes('::')) {
            const parts = line.split('::');
            if (parts.length >= 2) {
                let singleLineEntry = {}
                let term = parts[0].trim();
                singleLineEntry.header = term;
                singleLineEntry.description = term;
                singleLineEntry.answer = parts[parts.length - 1].trim();
                singleLineEntry.prompt = term;
                singleLineEntry.reference_line = i + 1;
                result.entries.push(singleLineEntry);
            }

        }

        // Prompt line
        if (line.startsWith('?p:') && currentEntry) {
            currentEntry.prompt = line.slice(3).trim();
            i++;
            continue;
        }

        // Answer block ?x or ??x
        if ((line === '?x' || line === '??x') && currentEntry) {
            const isMultiLine = (line === '??x');
            let answerLines = [];

            i++;
            while (i < lines.length) {
                const answerLine = lines[i];
                if (isMultiLine && answerLine.trim() === 'x??') {
                    i++; break;
                }
                if (!isMultiLine && answerLine.trim() === '') break;
                answerLines.push(answerLine);
                i++;
            }
            currentEntry.answer = answerLines.join('\n');
            continue;
        }

        // Description block (multi-line before ?x or ?p or next ####)
        if (currentEntry && !line.startsWith('?') && !line.startsWith('####')) {
            if (currentEntry.description !== '') currentEntry.description += '\n';
            currentEntry.description += line;
        }

        // if line is empty, finish the connected paragraph
        if (line === '') {
            last_connected_paragraph = '';
            last_connected_paragraph_line = i;

        } else {
            // if the line is not empty, we can connect it to the last paragraph
            if (last_connected_paragraph !== '') {
                last_connected_paragraph += '\n' + line;
            } else {

                last_connected_paragraph = line;
            }
        }

        i++;
    }

    if (currentEntry) {
        result.entries.push(currentEntry);
    }

    return result;
}

function parseMarkdownIntoDeck(filePath, { module_name = 'Markdown Terms Parser', category = "" } = {}) {
    /**
     * Return as a list of Term objects
     */

    const parsedData = parseMarkdownCards(filePath);
    const termsList = [];

    if (category === "") {
        category = module_name;
    }
    console.log(`Parsing terms from ${filePath}#23 in category: ${category}`);
    for (const entry of parsedData.entries) {
        const term = new Term(
            entry.header,
            entry.answer || '',
            entry.description || '',
            entry.prompt || '',
            {
                reference_page: filePath,
                reference_line: entry.reference_line || -1,
                module_name: module_name,
                category: category
            });
            // console.log("created new terms", term);
        termsList.push(term);
    }

    return termsList;

}

function parseMarkdownCardsFromFolder(folderPath) {
    const files = fs.readdirSync(folderPath);
    const terms = [];
    for (const file of files) {
        const filePath = `${folderPath}/${file}`;
        if (fs.statSync(filePath).isFile() && file.endsWith('.md')) {
            const parsedTerms = parseMarkdownIntoDeck(filePath);
            terms.push(...parsedTerms);
        }
    }
    return terms;
}


function parseMarkdownCardsFromTermsModules(termsModules) {
    const decks = {};
    for (const module of termsModules) {
        const terms = [];
        if (module.CONTENT_FOLDERS) {
            for (const folder of module.CONTENT_FOLDERS) {
                const folderPath = getDirAbsoluteUri(`user_data/terms_modules/${module.module_path}/${folder}`)
                const parsedTerms = parseMarkdownCardsFromFolder(folderPath);
                terms.push(...parsedTerms);
            }
        }
        if (module.CONTENT_FILES) {
            for (const file of module.CONTENT_FILES) {
                // const filePath = `src/data/user_data/terms_modules/${module.ABOUT.skill_category}/${file}`;
                const filePath = getDirAbsoluteUri(`user_data/terms_modules/${module.module_path}/${file}`);
                const parsedTerms = parseMarkdownIntoDeck(filePath, { module_name: module.ABOUT.title, category: module.ABOUT.skill_category });
                terms.push(...parsedTerms);
            }
        }
        if (module) {

            decks[module.module_path] = new TermStorage(
                terms, module.ABOUT.skill_category
            );
        }
    }
    return decks;
}


function retrieve_terms_modules() {
    const termsModules = {};
    const termsModulesPath = getDirAbsoluteUri('user_data/terms_modules');
    const moduleFolders = fs.readdirSync(termsModulesPath).filter(file => fs.statSync(`${termsModulesPath}/${file}`).isDirectory());

    for (const folder of moduleFolders) {
        const modulePath = `${termsModulesPath}/${folder}/index.js`;
        if (fs.existsSync(modulePath)) {
            const moduleExports = require(modulePath);
            termsModules[moduleExports.module_path] = moduleExports;
        }
    }
    return termsModules;
}

function retrieve_terms_as_decks() {
    const termsModules = retrieve_terms_modules();
    return parseMarkdownCardsFromTermsModules(Object.values(termsModules));
}



module.exports = {
    parseMarkdownCards,
    parseMarkdownIntoDeck,
    parseMarkdownCardsFromFolder,
    parseMarkdownCardsFromTermsModules,
    retrieve_terms_modules,
    retrieve_terms_as_decks
}