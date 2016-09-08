import levelEs6Html from './level-es6.component.html';


const LevelEs6Component = {
    bindings: {
        max: '<',
    },
    //controller: LevelEs6Controller,
    //controllerAs: 'vm',
    controller: 'LevelEs6Controller as vm',
    template: levelEs6Html
};

class LevelEs6Controller {
    constructor(_) {
        'ngInject';

        this._ = _;
        this.level = _.random(this.max);
    }

    getLevel() {
        return this.level;
    }
}


export { LevelEs6Component, LevelEs6Controller };
