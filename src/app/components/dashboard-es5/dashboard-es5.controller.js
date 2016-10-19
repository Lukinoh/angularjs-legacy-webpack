export default DashboardEs5Controller;

function DashboardEs5Controller(logger) {
  'ngInject'; // The old manner (i.e comment) work also, but this is better explicit.

  var vm = this;
  vm.title = 'Dashboard Es5';
  vm.getText = getText;

  activate();

  function activate() {
    logger.info('Dashboard Es5 Controller Activated !', {}, 'Status');
  }

  function getText() {
    return 'My Awesome Dashboard Es5';
  }
}
