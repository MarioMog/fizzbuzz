const fs = require('fs')

// Part 1 Read json file ===========================
class Reader {
  static readJsonFile(filePath) {
    const rawdata = fs.readFileSync(filePath)
    return JSON.parse(rawdata)
  }
}
module.exports = Reader
