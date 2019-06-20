# ymaps

[![npm version](https://img.shields.io/npm/v/ymaps.svg?style=flat)](https://npmjs.org/package/ymaps)
[![CircleCI](https://circleci.com/gh/sergeysolovev/ymaps.svg?style=shield)](https://circleci.com/gh/sergeysolovev/ymaps)

Yandex Maps on-demand promise-based widget loader.

- Appends [Yandex Maps API](https://tech.yandex.com/maps/jsapi/) script to the
  document body.
- Returns a promise which resolves as soon as the script has loaded and the
  [API is ready](https://tech.yandex.com/maps/doc/jsapi/2.1/dg/concepts/load-docpage/#api-ready).

This way the widget doesn’t load until it’s needed to decrease page load time.

[View on CodeSandbox →](https://codesandbox.io/s/ymaps-v1cb6)

## Quickstart

Install from the command line:

```shell
npm install ymaps
```

Use in your code to load the widget:

```javascript
import ymaps from 'ymaps';

ymaps
  .load()
  .then(maps => {
    const map = new maps.Map('your-map-container', {
      center: [-8.369326, 115.166023],
      zoom: 7
    });
  })
  .catch(error => console.log('Failed to load Yandex Maps', error));
```

To use another language simply pass a valid `src` to `ymaps.load`

```javascript
ymaps.load('https://api-maps.yandex.ru/2.1/?lang=en_US').then(maps => {
  /* ... */
});
```

The information about other options is available in the
[API docs](https://tech.yandex.com/maps/doc/jsapi/2.1/dg/concepts/load-docpage/).
Please check out [known issues](#known-issues) to see not supported options.

## Running the tests

```shell
npm test
```

## Known issues

- `load` parameter, except when it's set to `package.full` is causing an error
  "TypeError: s is not a constructor". To reproduce, try to pass
  `"//api-maps.yandex.ru/2.1/?lang=en_US&load=Map"` to `ymaps.load` in the
  [example above](#usage). PR is welcome!

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of
conduct, and the process for submitting pull requests to us.

## Versioning

[SemVer](http://semver.org/) is used for versioning. For the versions available,
see the [tags on this repository](https://github.com/sergeysolovev/ymaps/tags).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.
