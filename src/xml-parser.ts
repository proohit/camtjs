import { ParserOptions, parseString } from 'xml2js';

export const parseStringToXml = <R>(
  xml: string,
  options?: ParserOptions,
): Promise<R> => {
  return new Promise((resolve, reject) => {
    parseString(xml, options || {}, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result as R);
      }
    });
  });
};
