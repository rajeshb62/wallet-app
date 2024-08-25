import { createRequire } from 'module';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
const require = createRequire(import.meta.url);

export default (_, argv) => ({
  target: 'web',
  mode: argv.mode || 'production',
  devtool: 'source-map',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'bundle.[contenthash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: './public/favicon.ico',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(argv.mode || 'production'),
        PXE_URL: JSON.stringify(process.env.PXE_URL || 'http://localhost:8080'),
      },
    }),
    new webpack.ProvidePlugin({ Buffer: ['buffer', 'Buffer'] }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    fallback: {
      crypto: false,
      os: false,
      fs: false,
      path: false,
      url: false,
      worker_threads: false,
      events: require.resolve('events/'),
      buffer: require.resolve('buffer/'),
      util: require.resolve('util/'),
      stream: require.resolve('stream-browserify'),
      string_decoder: require.resolve('string_decoder/'),
      tty: require.resolve('tty-browserify'),
    },
  },
  devServer: {
    port: 3001,
    historyApiFallback: true,
    open: true,
    host: '0.0.0.0',
    allowedHosts: 'all',
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    static: {
      directory: path.join(process.cwd(), 'public'),
    },
  },
});