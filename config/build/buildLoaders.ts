import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders (options:BuildOptions): webpack.RuleSetRule[] {
    const styleLoader = options.isDev ? "style-loader" : MiniCssExtractPlugin.loader

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            styleLoader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes(".module.")),
                        localIdentName: options.isDev ? "[path][name]__[local]" : "[hash:base64:8]"
                    }
                }
            },
            "sass-loader"
        ]
    }
    return [
        typescriptLoader,
        cssLoader
    ]
}