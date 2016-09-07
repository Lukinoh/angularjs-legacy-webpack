export default class LevelEs6Controller {
    constructor(_) {
        'ngInject';

        this._ = _;
    }

    getLevel() {
        return this._.random(this.max);
    }
}