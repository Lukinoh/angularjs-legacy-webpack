import levelEs5Html from './level-es5.component.html';

export {LevelEs5Component, LevelEs5Controller};

function LevelEs5Component() {
    return {
        bindings: {
            max: '<'
        },
        controller: LevelEs5Controller,
        controllerAs: 'vm',
        //controller: 'LevelController as vm',
        template: levelEs5Html
    };
}

function LevelEs5Controller(_) {
    'ngInject';
    const vm = this;

    vm.getLevel = getLevel;

    ////////////////

    const level = _.random(vm.max);

    function getLevel() {
        return level;
    }
}
