"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("file-system");
var child_process_1 = require("child_process");
function spawnGPG(filePath) {
    console.log("Signing " + filePath);
    var options = ['--armor', '--batch', '--sign'];
    var childProc = child_process_1.spawn('gpg', options.concat([filePath]));
    childProc.on('exit', function (code) {
        code !== 0 ? console.log("GPG error code: " + code) : null;
    });
}
function signOrSkipFile(filePath) {
    fs.access(filePath + ".asc", fs.constants.F_OK, function (err) {
        if (err && err.code === 'ENOENT') {
            spawnGPG(filePath);
        }
    });
}
function signFolder(folderPath) {
    fs.recurse(folderPath, ['**/*.md'], function (filePath, relative, fileName) {
        if (fileName) {
            signOrSkipFile(filePath);
        }
    });
}
signFolder('content/blog');
