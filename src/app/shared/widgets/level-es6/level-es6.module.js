import LevelEs6Component from './level-es6.component';
import LevelEs6Controller from './level-es6.controller';

export default angular
    .module('app.widgets.levelEs6', [])
    .component('levelEs6', LevelEs6Component)
    .controller('LevelEs6Controller', LevelEs6Controller)
    .name;
