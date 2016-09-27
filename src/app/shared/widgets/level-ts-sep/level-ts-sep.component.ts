// import levelTsHtml from './level-ts.component.html';
// import LevelTsSepController from './level-ts-sep.controller';
import * as levelTsSepHtml from './level-ts-sep.component.html';

const LevelTsSepComponent = {
    bindings: {
        max: '<'
    },
    controller: 'LevelTsSepController as vm',
    // controller: LevelTsSepController,
    // controllerAs: 'vm',
    template: levelTsSepHtml
} as ng.IComponentOptions;

export default LevelTsSepComponent;
