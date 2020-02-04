export function abbreviateNumber(
  num: number,
  digit: number = 1,
  symbols: Array<string> = ["", "K", "M", "G", "T", "P", "E"],
): string {
  // handle negatives
  const sign = Math.sign(num) >= 0;
  num = Math.abs(num);

  // what tier? (determines SI symbol)
  const tier = (Math.log10(num) / 3) | 0;

  // if zero, we don't need a suffix
  if (tier == 0) return num.toString();

  // get suffix and determine scale
  const suffix = symbols[tier];
  if (!suffix) throw new RangeError();

  const scale = Math.pow(10, tier * 3);

  // scale the number
  const scaled = num / scale;

  // format number and add suffix
  return (!sign ? "-" : "") + scaled.toFixed(digit) + suffix;
}
