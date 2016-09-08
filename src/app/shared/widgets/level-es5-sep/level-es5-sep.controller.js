export default LevelEs5SepController;

function LevelEs5SepController(_) {
    'ngInject';
    const vm = this;

    vm.getLevel = getLevel;

    ////////////////

    const level = _.random(vm.max);

    function getLevel() {
        return level;
    }
}