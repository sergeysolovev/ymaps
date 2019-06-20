'use strict';

const path = require('path');
const babel = require('rollup-plugin-babel');
const babelConfig = require('./babel.config.js');
const pkg = require('./package.json');

module.exports = {
  input: path.resolve(__dirname, 'src/ymaps'),
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'esm'
    }
  ],
  plugins: [babel({ exclude: 'node_modules/**', ...babelConfig })]
};
