export default class LevelTsSepController {

    // Bindings
    max: number;

    // Local
    level: number;

    constructor(private _: _.LoDashStatic) {
        'ngInject';

        this.level = _.random(this.max);
    }

    getLevel() {
        return '4';
    }
}