var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    //'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals:{
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias:{
      Quote: 'app/components/Quote.jsx',
      QuoteButtons: 'app/components/QuoteButtons.jsx',
      QuoteDisplay: 'app/components/QuoteDisplay.jsx',
      QuotesObject: 'app/components/QuotesObject.jsx',
      AddQuoteForm: 'app/components/AddQuoteForm.jsx',
      AllQuotes: 'app/components/AllQuotes.jsx',
      ToggleButtons: 'app/components/ToggleButtons.jsx',
      Flash:        'app/components/Flash.jsx',
      API: 'api/api.js',
      Utility: 'utility.js',
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['', '.js', 'jsx']
  },
  module: {
    loaders:[
      {
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
