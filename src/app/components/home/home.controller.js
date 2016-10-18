export default class HomeController {
    constructor(logger, _, $routeParams, $location) {
        'ngInject'; // The old manner (i.e comment) work also, but this is better explicit.

        this.logger = logger;
      this.$routeParams = $routeParams;
      this.$location = $location;
        this._ = _;
        this.activate();
    }

    activate() {
        this.logger.info('Home Controller Activated !', {}, 'Status');
        console.log(this._.join(['hello', 'toto'], '~'));
      //this.$location.path('/font-zarbi').search({
      //  key: 'newvalue'
      //}).replace();
    //  this.$location.params({
      //  toto: 'titi'
      //})
    }

    // No more private function, only public
}

