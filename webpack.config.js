var webpack = require('webpack');

var config = {
  context: __dirname,

  entry: {
    github: "./src/github"
  },

  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
  },

  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: 'jsx-loader?insertPragma=React.DOM&harmony'
    }]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['src']
  },

  externals: {
    react: 'React'
  },

  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    )
  ]
};

module.exports = config;
