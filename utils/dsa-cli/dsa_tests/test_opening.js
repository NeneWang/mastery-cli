
const { exec, spawn } = require('node:child_process')

const fileName = "temp.js"

const common_editors = {
    'nano': 'start nano',
    'vim': 'start vim',
    'nvim': 'start nvim',
    'emacs': 'start emacs',
    'sublime': 'start sublime',
    'atom': 'start atom',
    'code': 'start code',
}

exec(`${common_editors.nvim} ${fileName}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`Continue running`);
});
