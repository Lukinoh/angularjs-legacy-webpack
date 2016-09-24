import webpack from 'webpack';
import * as helpers from '../helpers.babel';

export function getEntry() {
    return {
        entry: {
            app: helpers.root('src', 'app', 'app.module.js'),
            appStyle: helpers.root('src', 'assets', 'css', 'main.scss'),
            vendor: helpers.root('src', 'app', 'vendor.module.js'),
            vendorStyle: helpers.root('src', 'assets', 'css', 'vendor.scss')
        }
    };
}

export function getResolve() {
    return {
        resolve: {
            extensions: ['', '.ts', '.js', '.json'],
            root: helpers.root('src'),
            modulesDirectories: ['node_modules'],
        }
    };
}

export function getOutput(mode) {
    var name = '[name]';
    if (mode === 'prod') {
        name = '[name].[chunkhash]';
    }

    return {
        output: {
            path: helpers.root('build'),
            filename: name + '.bundle.js',
            sourceMapFilename: name + '.bundle.map',
        }
    };
}

export function getDevTool(type) {
    return {
        devtool: type
    };
}

// Maybe add options in future
export function getDevServer(mode) {
    if (mode === 'prod') {
        return {
            devServer: {
                port: 9000,
                host: '0.0.0.0',
                hot: false,
                inline: true,
                historyApiFallback: true,
            }
        };
    } else {
        return {
            devServer: {
                port: 9000,
                host: '0.0.0.0',
                hot: true,
                inline: true,
                historyApiFallback: true,
            },
            plugins: [
                new webpack.HotModuleReplacementPlugin({
                    multiStep: true
                })
            ]
        };
    }
}