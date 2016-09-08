import LevelEs6SepComponent from './level-es6-sep.component';
import LevelEs6SepController from './level-es6-sep.controller';

export default angular
    .module('app.widgets.levelEs6Sep', [])
    .component('levelEs6Sep', LevelEs6SepComponent)
    .controller('LevelEs6SepController', LevelEs6SepController)
    .name;
