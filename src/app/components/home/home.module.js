import HomeController from "./home.controller";
import setRoute from "./home.route";

export default angular
    .module('app.home', [])
    .config(setRoute)
    .controller('HomeController', HomeController)
    .name;
