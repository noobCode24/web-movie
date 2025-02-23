export const cleanUrl = (url) => {
  console.log('🚀 ~ cleanUrl ~ url:', url)
  const urlObj = new URL(url);
  Array.from(urlObj.searchParams.keys()).forEach((key) => {
    if (urlObj.searchParams.get(key) === 'undefined') {
      urlObj.searchParams.delete(key);
    }
  });
  return urlObj.toString();
};