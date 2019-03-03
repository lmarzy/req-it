export const formatImageSrc = (str: string) => {
  const formattedString = str.replace(/\s+/g, '-').toLowerCase();
  return formattedString;
};
