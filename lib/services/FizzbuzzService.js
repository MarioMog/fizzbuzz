class FizzbuzzService {
  static applyValidationInExplorer(explorer) {
    if (Object.keys(explorer).length === 0)
      return 'explorer cannot be an empty object'
    if (explorer.score === undefined) return 'explorer doesnt have score key'
    if (typeof explorer.score !== 'number')
      return 'explorer.score isnt a number'
    if (explorer.score % 5 === 0 && explorer.score % 3 === 0) {
      explorer.trick = 'FIZZBUZZ'
    } else if (explorer.score % 3 === 0) {
      explorer.trick = 'FIZZ'
    } else if (explorer.score % 5 === 0) {
      explorer.trick = 'BUZZ'
    } else {
      explorer.trick = explorer.score
    }
    return explorer
  }
  static applyValidationInNumber(number) {
    if (typeof number !== 'number') return 'param number isnt a number'
    if (number % 5 === 0 && number % 3 === 0) return 'FIZZBUZZ'
    if (number % 3 === 0) return 'FIZZ'
    if (number % 5 === 0) return 'BUZZ'
    return number
  }
}
module.exports = FizzbuzzService
