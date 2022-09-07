type StrProcessingFn = (str: string) => string;

const captalize: StrProcessingFn = (word) =>
  word[0].toUpperCase() + word.slice(1).toLowerCase();

const capitalizeTitle: StrProcessingFn = (title) =>
  title
    .split(" ")
    .map((word) => (word.length <= 2 ? word.toLowerCase() : captalize(word)))
    .join(" ");
