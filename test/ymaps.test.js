import ymaps from '../src/ymaps';
import fileUrl from 'file-url';
import path from 'path';

describe('ymaps', () => {
  it('is an object with load method', () => {
    expect(ymaps).toMatchObject({
      load: expect.any(Function)
    });
  });

  describe('ymaps.load', () => {
    const src = fileUrl(
      path.resolve(__dirname, 'ymaps.vendor.mock.js')
    );

    beforeEach(() => {
      ymaps.promise = null;
      document.querySelectorAll('script').forEach(script => script.remove());
    });

    it('returns promise, that resolves to vendor ymaps object', () => {
      return expect(ymaps.load(src))
        .resolves
        .toMatchObject({
          ready: expect.any(Function)
        });
    });

    it(`appends script element to body
        with a given src and type "text/javascript"`, () => {
      return ymaps.load(src).then(() => {
        const script = document.querySelector('script');
        expect(script).toBeDefined();
        expect(script.src).toBe(src);
        expect(script.type).toBe('text/javascript');
      });
    });

    it(`doesn't append the script twice`, () => {
      return Promise
        .all([
          ymaps.load(src),
          ymaps.load(src)
        ])
        .then(() => {
          expect(document.querySelectorAll('script')).toHaveLength(1);
        });
    });

    it(`rejects if the script src is invalid`, () => {
      return expect(ymaps.load('wrong_url')).rejects.toBeDefined();
    });
  })
})
