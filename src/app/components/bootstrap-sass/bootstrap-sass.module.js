import BootstrapSassController from './bootstrap-sass.controller';
import setRoute from './bootstrap-sass.route';

export default angular
  .module('app.bootstrapSass', [])
  .config(setRoute)
  .controller('BootstrapSassController', BootstrapSassController)
  .name;
