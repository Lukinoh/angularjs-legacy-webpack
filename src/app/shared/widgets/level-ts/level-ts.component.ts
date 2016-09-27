import * as levelTsHtml from './level-ts.component.html';

// Order is important
const LevelTsComponent = {
    bindings: {
        'max': '<'
    },
    controller: 'LevelTsController as vm', // You do not use this syntax you cannot have the component definition before the controller definition
    template: levelTsHtml
} as ng.IComponentOptions;

class LevelTsController {

    // Bindings
    max: number;

    // Local
    level: number;

    constructor(private _: _.LoDashStatic) {
        'ngInject';

        this.level = _.random(this.max);
    }

    getLevel() {
        return this.level;
    }
}

export { LevelTsController, LevelTsComponent }
