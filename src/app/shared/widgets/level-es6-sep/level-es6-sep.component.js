import levelEs6SepHtml from './level-es6-sep.component.html';
// import LevelEs6SepController from './level-es6-sep.controller';

const LevelEs6SepComponent = {
  bindings: {
    max: '<'
  },
  // controller: LevelEs6SepController,
  // controllerAs: 'vm',
  controller: 'LevelEs6SepController as vm',
  template: levelEs6SepHtml
};

export default LevelEs6SepComponent;
