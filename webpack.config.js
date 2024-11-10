const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = [
  // CommonJS configuration
  {
    mode: 'production',
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, 'build/dist/cjs'),
      filename: 'index.js',       // Output CommonJS version
      libraryTarget: 'commonjs2',     // Targeting Node.js (CommonJS)
      clean: true
    },
    target: 'node',                   // Target Node.js
    externals: [nodeExternals()],     // Exclude Node modules from bundling
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.cjs.json'), // Use tsconfig.cjs.json for CommonJS
            },
          },
          exclude: /node_modules/,
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    devtool: 'source-map',
  },
  
  // ESM configuration
  {
    mode: 'production',
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, 'build/dist/esm'),
      filename: 'index.js',          // Output ESM version (use .mjs extension for ESM)
      library: {
        type: 'module',               // Specify output as ESM
      },
      clean: true,
    },
    experiments: {
      outputModule: true,             // Enable ESM output
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.esm.json'), // Use tsconfig.esm.json for ESM
            },
          },
          exclude: /node_modules/,
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    devtool: 'source-map',
  }
];
