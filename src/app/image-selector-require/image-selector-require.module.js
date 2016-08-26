import ImageSelectorRequireController from "./image-selector-require.controller";
import setRoute from "./image-selector-require.route";

export default angular
    .module('app.imageSelectorRequire', [])
    .config(setRoute)
    .controller('ImageSelectorRequireController', ImageSelectorRequireController)
    .name;
