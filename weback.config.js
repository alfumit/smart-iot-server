const config = {
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
