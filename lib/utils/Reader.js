const fs = require("fs");

class Reader {
    static readJsonFile(filePath) {
        if(typeof filePath !== "string")
            return "filePath should be a string"; 
        if(filePath === "")
            return "filePath cannot be an empty string";
        const rawdata = fs.readFileSync(filePath);
        return JSON.parse(rawdata);
    }
}
module.exports = Reader;
