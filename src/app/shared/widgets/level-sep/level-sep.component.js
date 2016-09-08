import levelSepHtml from './level-sep.component.html';
import LevelSepController from './level-sep.controller';

export default LevelSepComponent;

function LevelSepComponent() {
    return {
        bindings: {
            max: '<',
        },
        //controller: 'LevelSepController as vm',
        controller: LevelSepController,
        controllerAs: 'vm',
        template: levelSepHtml
    };
}
