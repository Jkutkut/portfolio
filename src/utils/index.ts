export const str2slug = (str: string): string => {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '')
    .replace(/^-+|-+$/g, '');
}
