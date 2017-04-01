module.exports = {
  entry: './RQ_index.js',
  output: {
    filename: './Build/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
					presets: ['react', 'es2015', 'stage-0']
				}
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
};
