import LevelEs5SepComponent from './level-es5-sep.component';
import LevelEs5SepController from './level-es5-sep.controller';

export default angular
  .module('app.widgets.levelEs5Sep', [])
  .component('levelEs5Sep', LevelEs5SepComponent())
  .controller('LevelEs5SepController', LevelEs5SepController)
  .name;
