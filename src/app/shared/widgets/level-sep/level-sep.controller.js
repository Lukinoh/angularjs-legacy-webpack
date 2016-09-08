export default LevelSepController;

function LevelSepController(_) {
    'ngInject';
    const vm = this;

    vm.getLevel = getLevel;

    ////////////////

    const level = _.random(vm.max);

    function getLevel() {
        return level;
    }
}