export default LevelController;

function LevelController(_) {
    'ngInject';
    const vm = this;

    vm.getLevel = getLevel;

    ////////////////

    function getLevel() {
        return _.random(vm.max);
    }
}