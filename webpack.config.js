const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env, args) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    mode: 'development',
    entry: [path.join(__dirname, 'src', 'app.jsx')],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public', 'dist')
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ]
      },
      {
        test: /\.s?css$/,
        // use: [
        //   'style-loader',
        //   'css-loader',
        //   'sass-loader'
        // ]
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: true }
            }
          ]
        })
      }
      ]
    },
    resolve: {
      extensions: ['.json', '.js', '.jsx']
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      publicPath: '/dist/',
      historyApiFallback: true,
      open: true
    }
  };
}