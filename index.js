
module.exports = function kByV (obj, val) {
  for (var p in obj) {
    if (obj[p] === val) return p
  }

  return undefined
}
