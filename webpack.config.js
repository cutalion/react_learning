var webpack = require('webpack');

var config = {
  context: __dirname,

  entry: {
    github: "./src/application"
  },

  output: {
    path: __dirname + "/assets/javascripts",
    filename: "[name].js",
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'jsx-loader?insertPragma=React.DOM&harmony'
      },
      {
        test: /\.coffee$/,
        loader: 'coffee'
      },
      {
        test: /\.cjsx$/,
        loaders: ['coffee', 'cjsx']
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.coffee', '.cjsx'],
    modulesDirectories: ['src', 'bower_components', 'node_modules']
  },

  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    ),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery",
        React: 'react'
    })
  ]
};

module.exports = config;
