import * as helpers from '../helpers.babel';

export function getEslint(failOnHint = false) {
    return {
        module: {
            preLoaders: [
                {
                    test: /\.js$/,
                    loader: 'eslint-loader',
                    include: [helpers.root('src')]
                }
            ]

        },
        eslint: {
            configFile: helpers.root('config', 'lints', '.eslintrc.yml'),
            ignorePath: helpers.root('config', 'lints', '.eslintignore'),
            failOnWarning: failOnHint,
            failOnError: failOnHint
        }
    };
}

export function getTslint(failOnHint = false) {
    return {
        module: {
            preLoaders: [
                {
                    test: /\.ts$/,
                    loader: 'tslint-loader',
                    include: [helpers.root('src')]
                }
            ]

        },
        tslint: {
            configuration: require(helpers.root('config', 'lints', 'tslint.json')),
            failOnHint: failOnHint
        }
    };
}