import { LevelEs6Component, LevelEs6Controller} from './level-es6.component';

export default angular
    .module('app.widgets.levelEs6', [])
    .component('levelEs6', LevelEs6Component)
    .controller('LevelEs6Controller', LevelEs6Controller)
    .name;
