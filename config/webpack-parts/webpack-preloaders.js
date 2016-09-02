const helpers =  require('../helpers');

exports.getEslint = function () {
    return {
        module: {
            preLoaders: [
                {
                    test: /\.js$/,
                    loader: 'eslint-loader'
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
                    loader: 'tslint-loader'
                }
            ]

        },
        tslint: {
            configuration: helpers.yamlToJson(helpers.root('config', 'lints', 'tslint.yml'))
        }
    };
};