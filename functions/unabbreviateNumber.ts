export default function unabbreviateNumber(
  num: string,
  symbols: string[] = ["K", "M", "G", "T", "P", "E"],
) {
  const numsCorrespondingToSymbols = symbols.map((_symbol, index) =>
    Math.pow(10, (index + 1) * 3),
  );

  let sketchyPattern = "";
  symbols.forEach(_symbol => {
    sketchyPattern += `${_symbol}|`;
  });

  let pattern = sketchyPattern.slice(0, sketchyPattern.length - 1);
  pattern = `(${pattern})`;
  pattern += "\\b";
  console.log(pattern);

  const regex = new RegExp(pattern);
  console.log(regex);

  if (regex.test(num)) {
    const symbolPosition = num.search(pattern);
    const symbol = num.slice(symbolPosition);
    const symbolValue = numsCorrespondingToSymbols[symbols.indexOf(symbol)];
    const pureNum = Number(num.slice(0, symbolPosition));
    if (isNaN(pureNum)) {
      throw Error("This is not a valid input");
    } else {
      return pureNum * symbolValue;
    }
  } else {
    throw Error("This is not a valid input");
  }
}
