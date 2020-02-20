
exports.min = function min (arr) {
  return arr && arr.length > 0 ? arr.sort((a, b) => a - b)[0] : 0;
}

exports.max = function max (arr) {
  return arr && arr.length > 0 ? arr.sort((a, b) => b - a)[0] : 0;
}

exports.avg = function avg (arr) {
  return arr && arr.length > 0 ? arr.reduce((sum, a) => sum += a, 0) / arr.length : 0;
}
