import GoogleClosureController from "./google-closure.controller";
import setRoute from "./google-closure.route";

export default angular
    .module('app.googleClosure', [])
    .config(setRoute)
    .controller('GoogleClosureController', GoogleClosureController)
    .name;
