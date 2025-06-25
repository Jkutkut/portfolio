import fs from 'fs';
import path from 'path';

export type CacheHandler = ReturnType<typeof cacheHandler>;
export type FetchProps<T> = {
  filename: string;
  fetch: () => Promise<T | null>;
  toDisk?: (data: T) => string;
  fromDisk?: (data: string) => T;
}

export const cacheHandler = (cacheDir: string) => {
  const filePath = (filename: string) => path.join(cacheDir, filename);
  const isCached = (filename: string) => fs.existsSync(filePath(filename));
  const getCache = (filename: string) => fs.readFileSync(filePath(filename)).toString();
  const cachedFetch = async <T>({
    filename,
    fetch,
    toDisk = JSON.stringify,
    fromDisk = JSON.parse
  }: FetchProps<T>) => {
    if (isCached(filename)) {
      return fromDisk(getCache(filename));
    }
    const data = await fetch();
    if (data) {
      console.info(` - Cached ${filename}`);
      fs.writeFileSync(filePath(filename), toDisk(data));
    }
    return data;
  };
  const removeCache = (filename: string) => {
    if (isCached(filename)) {
      fs.unlinkSync(filePath(filename));
    }
  };
  const cacheDate = (filename: string) => {
    if (isCached(filename)) {
      return fs.statSync(filePath(filename)).mtime;
    }
    return null;
  };
  return {
    isCached,
    cachedFetch,
    removeCache,
    cacheDate
  };
};
