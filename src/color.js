
// Converts a ratio in the range [0,1] to a 2-digit hex string in the range
// [0,255].
function ratioToHex(ratio) {
  const byte = Math.round(ratio * 255);
  return (256 + byte).toString(16).slice(-2);
}

// Adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB_alternative
// Expects `saturation` and `lightness` in the range [0,1].
// Returns an array [red, green, blue] of ratios in the range [0,1].
export function hslToRgb(degrees, saturation, lightness) {
  const k = (n) => (n + degrees / 30) % 12;
  const a = saturation * Math.min(lightness, 1 - lightness);
  const f = (n) => lightness - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
  return [f(0), f(8), f(4)];
}

export function formatRgb(...rgbRatios) {
  return '#' + rgbRatios.map(ratioToHex).join('');
}

export function hsl(...args) {
  return formatRgb(...hslToRgb(...args));
}
