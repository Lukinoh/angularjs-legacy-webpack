import MiscellaneousController from './miscellaneous.controller';
import setRoute from './miscellaneous.route';

export default angular
  .module('app.miscellaneous', [])
  .config(setRoute)
  .controller('MiscellaneousController', MiscellaneousController)
  .name;
