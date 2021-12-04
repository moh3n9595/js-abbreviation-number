import { defaultSymbols } from "./const";

const indexToSymbol = (index = 0) => Math.pow(10, index * 3);

export function unabbreviateNumber(num: string, symbols = defaultSymbols) {
  const numberPattern = "[+-]?([0-9]*[.])?[0-9]+";
  const symbolPattern = `${symbols.join("|")}`;
  const pattern = `^(${numberPattern})(${symbolPattern})$`;
  const regex = new RegExp(pattern);
  const match = num.match(pattern) || [];

  if (regex.test(num) && match.length > 3) {
    const symbol = match[3];
    const symbolValue = indexToSymbol(symbols.indexOf(symbol));
    const pureNum = Number(match[1]);
    return pureNum * symbolValue;
  } else {
    throw Error("This is not a valid input");
  }
}
