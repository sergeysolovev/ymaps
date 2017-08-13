# react-unplug
Yandex Maps on-demand promise-based widget loader.

Appends to document body a script tag, referencing [Yandex Maps API](https://tech.yandex.com/maps/jsapi/). Provides promise, that resolves when the script is loaded and the [API is ready](https://tech.yandex.com/maps/doc/jsapi/2.1/dg/concepts/load-docpage/#api-ready).

## Installation

```shell
# npm
npm install ymaps

# yarn
yarn add ymaps
```

## Usage

```javascript
import ymaps from 'ymaps';

ymaps.load()
  .then(maps => {
    const map = new maps.Map('your-map-container', {
      center: [-8.369326, 115.166023]
    });
  })
  .catch(() => console.log('Failed to load Yandex Maps'));
}
```

## Running the tests

```shell
# with npm
npm test

# with yarn
yarn test
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

[SemVer](http://semver.org/) is used for versioning. For the versions available, see the [tags on this repository](https://github.com/sergeysolovev/ymaps/tags).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
