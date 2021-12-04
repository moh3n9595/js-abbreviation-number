export interface Options {
  padding?: boolean;
  symbols?: string[];
}

export const defaultOptions = {
  padding: true,
  symbols: ["", "k", "M", "G", "T", "P", "E"],
};
