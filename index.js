var toRgb = require('@btmango18/hsl-to-hex')

function max (val, n) {
  return (val > n) ? n : val
}

function min (val, n) {
  return (val < n) ? n : val
}

function cycle (val) {
  // for safety:
  val = max(val, 1e7)
  val = min(val, -1e7)
  // cycle value
  while (val < 0) { val += 360 }
  while (val > 359) { val -= 360 }
  return val
}

function hsl (hue, saturation, luminosity) {
  // resolve degrees to 0-369 range
  hue = cycle(hue)

  // enforce constraints
  saturation = min(max(saturation, 100), 0)
  luminosity = min(max(luminosity, 100), 0)

  var hex = toRgb(hue, saturation, luminosity)
  return hex
}

module.exports = hsl
