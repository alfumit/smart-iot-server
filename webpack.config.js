const config = {
  entry: './routes/homepage.js',
  output: {
    filename: './routes/hh1.js',
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-es6-template-loader',
        query: {
          transpile: true,
        },
      },
    ],
  },

};

module.exports = config;
