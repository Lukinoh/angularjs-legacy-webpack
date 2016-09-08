const helpers = require('../helpers');

exports.getEslint = function () {
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
            ignorePath: helpers.root('config', 'lints', '.eslintignore')
        }
    };
};


exports.getTslint = function () {
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
            configuration: require(helpers.root('config', 'lints', 'tslint.json'))
        }
    };
};