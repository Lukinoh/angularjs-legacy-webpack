import levelHtml from './level.component.html';

export {LevelComponent, LevelController};


function LevelComponent() {
    return {
        bindings: {
            max: '<',
        },
        controller: LevelController,
        controllerAs: 'vm',
        //controller: 'LevelController as vm',
        template: levelHtml
    };
}

function LevelController(_) {
    'ngInject';
    const vm = this;

    vm.getLevel = getLevel;

    ////////////////

    const level = _.random(vm.max);

    function getLevel() {
        return level;
    }
}
