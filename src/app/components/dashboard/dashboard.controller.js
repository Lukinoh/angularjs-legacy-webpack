export default DashboardController;

function DashboardController(logger) {
    'ngInject'; // The old manner (i.e comment) work also, but this is better explicit.

    var vm = this;
    vm.title = 'Dashboard';
    vm.getText = getText;

    activate();

    function activate() {
        logger.info('Dashboard Controller Activated !', {}, 'Status');
    }

    function getText() {
        return 'My Awesome Dashboard';
    }
}
