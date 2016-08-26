import ImageSelectorController from "./image-selector.controller";
import setRoute from "./image-selector.route";

export default angular
    .module('app.imageSelector', [])
    .config(setRoute)
    .controller('ImageSelectorController', ImageSelectorController)
    .name;
