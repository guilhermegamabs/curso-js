const fs = require('fs').promises;
const { read } = require('fs');
const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for(let file of files) {
        const filesFullPath = path.resolve(rootDir, file);
        const stats = await  fs.stat(filesFullPath);

        if(/\.git/g.test(filesFullPath)) continue;
        if(/node_moduless/g.test(filesFullPath)) continue;
        
        if(stats.isDirectory()) {
            read(filesFullPath);
            continue;
        }
        
        if(!/\.html$/g.test(filesFullPath)) continue;

        console.log(filesFullPath);
    }
}
readdir('/Documents/estudos/curso-js/node');