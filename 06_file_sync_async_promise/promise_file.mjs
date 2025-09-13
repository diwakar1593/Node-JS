import { stat, readFile } from "node:fs/promises";
/*
// ES2015 Promise based file system API
function doFileOperation() {
    stat('promisefile.txt')
        .then((stats) => {
            console.log("File has size: " + stats.size + " bytes");
            return readFile('promisefile.txt', 'utf8');
        })
        .then((data) => {
            console.log("File Contents: " + data.toString());
        })
        .catch((err) => {
            console.log("ERROR: " + err.code + " : " + err.message);
        });
}
*/
// ES2017 async/await based file system API
async function doFileOperationAsync() {
    try {
        const stats = await stat('promisefile.txt');
        console.log("File has size: " + stats.size + " bytes");
        const data = await readFile('promisefile.txt', 'utf8');
        console.log("File Contents: " + data.toString());
    }
    catch (err) {
        console.log("ERROR: " + err.code + " : " + err.message);
    }   
}


console.log("Going to do file operation...");
// doFileOperation();
doFileOperationAsync();
console.log("File operation done.");