const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const isReleaseCheckSize = process.env.CHECKSIZE === 'true';
module.exports = {
    mode: isDev ? 'development' : 'production',
    entry:
    {
        "main_content_script_login_php": "./src/main_content_script_login_php.ts",
        /*"main_content_script_self_charge_php": "./src/main_content_script_self_charge_php.ts",*/
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].bundle.js",
        sourceMapFilename: '[file].map',
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx']
    },
    watch: isDev,
    devtool: isDev ? 'source-map' : undefined,
    devServer: {
        port: 3000,
        historyApiFallback: true,
        static: { directory: path.join(__dirname, 'public'), }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }],
            },
        ]
    },
    plugins: isReleaseCheckSize ? [
        new CopyWebpackPlugin(
            {
                patterns: [
                    { from: "public", to: "./" }
                ]
            }
        ),
    ] : [
        new CopyWebpackPlugin(
            {
                patterns: [
                    { from: "public", to: "./" }
                ]
            }
        ),

    ],
}