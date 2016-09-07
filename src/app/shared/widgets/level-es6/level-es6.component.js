import levelEs6Html from './level-es6.component.html';
import LevelEs6Controller from './level-es6.controller';

const LevelEs6Component = {
    bindings: {
        max: '<',
    },
    controller: LevelEs6Controller,
    controllerAs: 'vm',
    template: levelEs6Html
};

export default LevelEs6Component;
