import LevelTsSepComponent from './level-ts-sep.component';
import LevelTsSepController from './level-ts-sep.controller';

export default angular
    .module('app.widgets.levelTsSep', [])
    .component('levelTsSep', LevelTsSepComponent)
    .controller('LevelTsSepController', LevelTsSepController)
    .name;
