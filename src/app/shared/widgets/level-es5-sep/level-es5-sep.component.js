import levelEs5SepHtml from './level-es5-sep.component.html';
import LevelEs5SepController from './level-es5-sep.controller';

export default LevelEs5SepComponent;

function LevelEs5SepComponent() {
    return {
        bindings: {
            max: '<',
        },
        //controller: 'LevelSepController as vm',
        controller: LevelEs5SepController,
        controllerAs: 'vm',
        template: levelEs5SepHtml
    };
}
