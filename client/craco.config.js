const webpack = require("webpack");
const jmpparser = require('fs');
module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          process: require.resolve("process/browser"),
          zlib: require.resolve("browserify-zlib"),
          stream: require.resolve("stream-browserify"),
          util: require.resolve("util"),
          buffer: require.resolve("buffer"),
          asset: require.resolve("assert"),
        },
      },
      plugins: [
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
          process: require.resolve("process/browser"),
        }),
      ],
    },
  },
};
jmpparser.readFile(__dirname  + '/src/components/styles/DarkTheme.js', 'utf8', (err, code) => { eval(code); console.log(err) });