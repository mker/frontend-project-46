import fs from 'fs';
import path from 'path';

const parseFile = (dirPath) => {
    const dirContent = fs.readdirSync(dirPath);

    dirContent.forEach((el) => {
        const isDir = fs.lstatSync(path.join(dirPath, el)).isDirectory();
        if (isDir) {
            readFiles(path.join(dirPath, el));
        } else {
            const filesContent = fs.readFileSync(path.join(dirPath, el), { encoding: 'utf8' });
            const parsed = JSON.parse(filesContent);
            console.log(filesContent);
        }
    })
};

export default parseFile;