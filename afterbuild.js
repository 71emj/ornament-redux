const fs = require('fs');
const join = require('path').join;
const rimraf = require('rimraf');

function _processFileTypeFactory(regex) {
    return fileName => regex.test(fileName);
}
const isDir = _processFileTypeFactory(/^[-\w_]+$/);
const isRawJs = _processFileTypeFactory(/^[-\w_]+(?:\.model|\.module)*\.js$/);

function _flatten(arrays) {
    if (Array.isArray(arrays)) {
        return arrays.reduce(
            (flat, files) => [...flat, ...files]
        , []);
    }
    return arrays;
}

function _resolveAll(conditions) {
    return Promise.all(conditions).catch(console.error);
}

function _processReadResultFactory(rootDir, resolve) {
    return (err, files) => {
        if (err) {
            throw err;
        }
        const fileList = [];
        const dirs = [];
        files.forEach(fileName => {
            if (isRawJs(fileName)) {
                fileList.push(join(rootDir, fileName));
            } else if (isDir(fileName)) {
                dirs.push(join(rootDir, fileName));
            }
        });
        if (!dirs.length) {
            resolve(fileList);
        } else {
            _resolveAll(dirs.map(dir => getBuildFiles(dir)))
                .then(files => 
                    resolve(_flatten([fileList, _flatten(files)]))
                );
        }
    }
}

function getBuildFiles(rootDir) {
    return new Promise(resolve => {
        const processReadResult = _processReadResultFactory(rootDir, resolve);
        fs.readdir(rootDir, processReadResult);
    });
}

function cleanBuildFiles(file) {
    return new Promise(resolve => {
        rimraf(
            join(__dirname, file), 
            err => {
                if (err) {
                    throw err;
                }
                resolve(`${file} deleted`);
            }
        );
    });
}

async function runClean() {
    const files = await getBuildFiles('dist');
    const results = await _resolveAll(files.map(cleanBuildFiles));
    console.log(results);
}

runClean();
