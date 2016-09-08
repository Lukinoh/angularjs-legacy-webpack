import LevelSepComponent from './level-sep.component';
import LevelSepController from './level-sep.controller';

export default angular
    .module('app.widgets.levelSep', [])
    .component('levelSep', LevelSepComponent())
    .controller('LevelSepController', LevelSepController)
    .name;
