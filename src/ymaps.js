export default {
  load(src) {
    this.promise = this.promise || new Promise((resolve, reject) => {
      let elem = document.createElement('script');
      elem.type = 'text/javascript';
      elem.src = src || '//api-maps.yandex.ru/2.1/?lang=en_RU';
      elem.onload = resolve;
      elem.onerror = e => reject(e)
      document.body.appendChild(elem);
    })
    .then(() =>
      new Promise(resolve => {
        if (!global.ymaps) {
          throw new Error('Failed to find ymaps in the global scope');
        }
        if (!global.ymaps.ready) {
          throw new Error('ymaps.ready is missing');
        }
        return ymaps.ready(resolve);
      })
    )
    return this.promise;
  }
};
