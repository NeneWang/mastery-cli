const fs = require('fs');

function parseMarkdownCards(filePath) {
    const lines = fs.readFileSync(filePath, 'utf-8').split(/\r?\n/);

    const result = {
        title: '',
        entries: []
    };

    let i = 0;
    let currentEntry = null;

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
            currentEntry = {
                header: line.replace(/^#+/, '').trim(),
                description: '',
                prompt: null,
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
                    description: previousLine,
                    prompt: null,
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

        i++;
    }

    if (currentEntry) {
        result.entries.push(currentEntry);
    }

    return result;
}


module.exports = {
    parseMarkdownCards
}