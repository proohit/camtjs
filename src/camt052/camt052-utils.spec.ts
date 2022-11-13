import { ATTRIBUTE_MAPPING, renameTags } from './camt052-utils';

describe('camt052-utils', () => {
  describe('renameTags', () => {
    it('should rename mapped tags', () => {
      Object.entries(ATTRIBUTE_MAPPING).forEach((entry) => {
        const [key, value] = entry;
        expect(renameTags(key)).toEqual(value);
      });
    });

    it('should not rename unmapped tags', () => {
      expect(renameTags('foo')).toEqual('foo');
    });
  });
});
