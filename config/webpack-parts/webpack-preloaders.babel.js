/*
 * An array of applied pre and post loaders.
 *
 * See: http://webpack.github.io/docs/configuration.html#module-preloaders-module-postloaders
 */
import * as helpers from '../helpers.babel';

/*
 * Eslint loader support for *.js files
 *
 * See: https://github.com/MoOx/eslint-loader
 */
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

        /*
         * Static analysis linter for JavaScript advanced options configuration
         * Description: An extensible linter for the JavaScript language.
         *
         * See: https://github.com/MoOx/eslint-loader
         */
        eslint: {
            configFile: helpers.root('config', 'lints', '.eslintrc.yml'),
            ignorePath: helpers.root('config', 'lints', '.eslintignore'),
            failOnWarning: failOnHint,
            failOnError: failOnHint
        }
    };
}

/*
 * Tslint loader support for *.ts files
 *
 * See: https://github.com/wbuchwalter/tslint-loader
 */
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

        /*
         * Static analysis linter for TypeScript advanced options configuration
         * Description: An extensible linter for the TypeScript language.
         *
         * See: https://github.com/wbuchwalter/tslint-loader
         */
        tslint: {
            configuration: require(helpers.root('config', 'lints', 'tslint.json')),
            failOnHint: failOnHint
        }
    };
}