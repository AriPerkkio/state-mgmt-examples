const fs = require('fs');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const getPath = dir => path.resolve(__dirname, dir);

module.exports = (_, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        mode: argv.mode || 'production',
        entry: getPath('src/index.js'),
        output: {
            path: getPath('build'),
            filename: isProduction
                ? 'static/js/[name].[contenthash:8].js'
                : 'static/js/bundle.js',
            chunkFilename: isProduction
                ? 'static/js/[name].[contenthash:8].chunk.js'
                : 'static/js/[name].chunk.js',
        },
        resolve: {
            extensions: ['.js', '.jsx', '.json', '.mjs'],
            modules: ['node_modules', './src'],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebPackPlugin({
                inject: true,
                template: getPath('public/index.html'),
            }),
            !isProduction && new ReactRefreshWebpackPlugin(),
            isProduction &&
                new MiniCssExtractPlugin({
                    filename: 'static/css/[name].[contenthash:8].css',
                    chunkFilename:
                        'static/css/[name].[contenthash:8].chunk.css',
                }),
        ].filter(Boolean),
        module: {
            rules: [
                {
                    test: /.scss$/,
                    use: [
                        isProduction
                            ? MiniCssExtractPlugin.loader
                            : 'style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        envName: argv.mode,
                        plugins: [
                            !isProduction && require('react-refresh/babel'),
                        ].filter(Boolean),
                    },
                },
                {
                    test: /\.lucy$/,
                    use: [
                        {
                            loader: path.resolve(
                                './webpack-loaders/lucy-loader.js'
                            ),
                        },
                    ],
                },
            ],
        },
        devServer: {
            port: 3000,
            static: {
                directory: path.join(__dirname, 'public'),
                watch: true,
            },
            allowedHosts: 'all',
            client: {
                logging: 'error',
                overlay: true,
            },
            onBeforeSetupMiddleware: devServer => {
                // In development mode, proxy source-code requests to local files
                devServer.app.get('/source-code/**', (req, res) => {
                    const fileName = req.path.replace('/source-code', '');
                    console.log(`Reading ${fileName}`);

                    fs.readFile(`src/${fileName}`, 'utf-8', (err, data) =>
                        res.end(data)
                    );
                });
            },
        },
    };
};
