import { LevelTsComponent, LevelTsController } from './level-ts.component';

export default angular
    .module('app.widgets.levelTs', [])
    .component('levelTs', LevelTsComponent)
    .controller('LevelTsController', LevelTsController)
    .name;
