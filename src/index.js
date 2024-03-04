import readFile from "./readFile.js";
import parseFile from "./parser.js";

function genDiff(filepath1, filepath2) {
    const readResult1 = readFile(filepath1);
    const readResult2 = readFile(filepath2);

    const parseResult1 = parseFile(readResult1);
    const parseResult2 = parseFile(readResult2);

    return [parseResult1, parseResult2];
}

export default genDiff;
