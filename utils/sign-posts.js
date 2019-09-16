"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var fs = require("file-system");
var child_process_1 = require("child_process");
function spawnGPG(filePath) {
    console.log("Signing " + filePath);
    var options = ['--armor', '--batch', '--sign'];
    var childProc = child_process_1.spawn('gpg', __spreadArrays(options, [filePath]));
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
signFolder('content/journal');
