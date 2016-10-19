import ImageSelectorEs6Controller from './image-selector-es6.controller';
import setRoute from './image-selector-es6.route';

export default angular
  .module('app.imageSelectorEs6', [])
  .config(setRoute)
  .controller('ImageSelectorEs6Controller', ImageSelectorEs6Controller)
  .name;
