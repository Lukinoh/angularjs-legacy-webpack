import MusicController from './music.controller';
import setRoute from './music.route';

export default angular
  .module('app.music', [])
  .config(setRoute)
  .controller('MusicController', MusicController)
  .name;
