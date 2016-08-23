export default DashboardController;

/* @ngInject */
function DashboardController(logger) {
    var vm = this;
    vm.title = 'Dashboard';

    activate();

    function activate() {
        logger.info('my message', {error: 'test'}, 'my title');
    }
}
