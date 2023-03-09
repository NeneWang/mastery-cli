const { writeUnresolvedClass } = require('../functions');
const ProblemsManager = require('../problems-manager');

// Iterate for metadata and create the files
const problemManager = new ProblemsManager();
problemManager.autoPopulateUsingTestDictionary();

const allProblemsMetadata = problemManager.problems;
for (let problemMetadata of Object.values(allProblemsMetadata)) {

    const filename = problemMetadata.file_path;

    writeUnresolvedClass(`../solutions/${filename}`, `../base_code/${filename}`, { avoidOverwrite: true });


}



