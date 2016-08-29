import FontZarbiController from "./font-zarbi.controller";
import setRoute from "./font-zarbi.route";

export default angular
    .module('app.fontZarbi', [])
    .config(setRoute)
    .controller('FontZarbiController', FontZarbiController)
    .name;
