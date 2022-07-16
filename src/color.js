/**
 * Converts a ratio in the range [0,1] to a 2-digit hex string in the range
 * [0,255].
 */
function ratioToHex(ratio) {
  const byte = Math.round(ratio * 255);
  return (256 + byte).toString(16).slice(-2);
}

/**
 * @returns `x` mod `modulus` in the range [0, modulus).
 */
const mod = (x, modulus) => ((x % modulus) + modulus) % modulus;

/**
 * Adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB_alternative
 * @param degrees color wheel angle in the range (-Infinity, Infinity).
 * @param saturation in the range [0,1].
 * @param lightness in the range [0,1].
 * @returns an array of [red, green, blue] ratios in the range [0,1].
 */
export function hslToRgb(degrees, saturation, lightness) {
  const k = n => mod(n + degrees / 30, 12);
  const a = saturation * Math.min(lightness, 1 - lightness);
  const f = n => lightness - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
  return [f(0), f(8), f(4)];
}

export function formatRgb(...rgbRatios) {
  return "#" + rgbRatios.map(ratioToHex).join("");
}

export function hsl(...args) {
  return formatRgb(...hslToRgb(...args));
}
