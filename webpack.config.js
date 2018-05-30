module.exports = {
  entry: {
    index: './main.ts',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/built',
  },
  resolve: {
    extensions: ['.ts', '.js', '.tp'],
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.tp$/, loader: 'typetemplate' },
    ],
  },
};
