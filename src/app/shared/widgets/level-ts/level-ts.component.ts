// import levelTsHtml from './level-ts.component.html';
const levelTsHtml:string = require('./level-ts.component.html');

export default {
    bindings: {
    },
    controller: LevelTsController,
    controllerAs: 'vm',
    template: levelTsHtml
};

class LevelTsController {

    // Bindings
    max: number;

    // Local

    constructor(private _: _.LoDashStatic) {
        'ngInject';
    }

    getLevel() {
        return _.random(this.max);
    }
}
