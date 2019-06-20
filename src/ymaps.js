export default {
  load(src = '//api-maps.yandex.ru/2.1/?lang=en_RU') {
    const getNsParamValue = () => {
      const results = src.match(/[\\?&]ns=([^&#]*)/);
      return results === null
        ? ''
        : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
    if (!this.promise) {
      this.promise = new Promise((resolve, reject) => {
        const scriptElement = document.createElement('script');
        scriptElement.onload = resolve;
        scriptElement.onerror = reject;
        scriptElement.type = 'text/javascript';
        scriptElement.src = src;
        document.body.appendChild(scriptElement);
      }).then(() => {
        const ns = getNsParamValue();
        if (ns && ns !== 'ymaps') {
          (1, eval)(`var ymaps = ${ns};`);
        }
        return new Promise(resolve => ymaps.ready(resolve));
      });
    }
    return this.promise;
  }
};
