export default class LevelEs6SepController {
    constructor(_) {
        'ngInject';

        this._ = _;
        this.level = this._.random(this.max);
    }

    getLevel() {
        return this.level;
    }
}