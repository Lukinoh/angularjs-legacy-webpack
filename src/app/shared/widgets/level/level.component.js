import levelHtml from './level.component.html';
import LevelController from './level.controller';

export default LevelComponent;

function LevelComponent() {
    return {
        bindings: {
            max: '<',
        },
        controller: LevelController,
        controllerAs: 'vm',
        template: levelHtml
    };
}
