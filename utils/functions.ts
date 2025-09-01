export function formatDayKey(key: string) {
  const match = key.match(/^([a-zA-Z]+)(\d+)$/);

  if (!match) return key;

  const [, word, number] = match;
  const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);

  return `${capitalizedWord} ${number}`;
}
