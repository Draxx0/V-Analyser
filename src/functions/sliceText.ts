export const sliceText = (text: string, length: number): string => {
  if (text.length > length) {
    return text.slice(0, length) + "...";
  }
  return text;
};
