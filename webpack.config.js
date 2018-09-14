const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const WebpackBuildNotifierPlugin = require('webpack-build-notifier')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const isProd = arg => {
  if (arg === undefined) return false
  return arg.mode === 'production'
}

const devPlugin = [
  new webpack.NamedModulesPlugin(),
  new WebpackBuildNotifierPlugin({
    sound: false,
  }),
  new FriendlyErrorsWebpackPlugin(),
]

const dist = __dirname + '/public'

module.exports = (env, argv) => ({
  mode: isProd(argv) ? 'production' : 'development',
  devtool: isProd(argv) ? false : 'inline-source-map',
  context: path.resolve(__dirname),
  entry: { app: './app/index.js' },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: isProd(argv) ? './' : '/',
    filename: '[name].[hash].js',
  },
  serve: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'eslint-loader',
            options: { failOnError: isProd(argv) },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_DEVELOPMENT: !isProd(argv),
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'assets/index.html'),
      inject: true,
      minify: isProd(argv)
        ? {
            html5: true,
            minifyCSS: true,
            removeAttributeQuotes: true,
            collapseWhitespace: true,
          }
        : false,
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'assets/img/'),
        to: path.resolve(__dirname, 'public/assets/img/'),
      },
      {
        from: path.resolve(__dirname, 'assets/manifest.json'),
        to: path.resolve(__dirname, 'public/manifest.json'),
      },
    ]),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: dist + '/sw.js',
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp('/'),
          handler: 'staleWhileRevalidate',
        },
        {
          urlPattern: new RegExp('https://www.googleapis.com/'),
          handler: 'cacheFirst',
          options: {
            cacheName: 'api',
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 72 * 60 * 60
            },
            cacheableResponse: { statuses: [0, 200] },
          }
        },
      ],
    }),
  ].concat(isProd(argv) ? [] : devPlugin),
  resolve: {
    extensions: ['.js', '.ts'],
  },
})
