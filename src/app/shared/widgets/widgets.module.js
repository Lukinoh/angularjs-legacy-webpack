import widgetRating from './rating/rating.module';
import widgetLevel from './level/level.module';
import widgetLevelEs6 from './level-es6/level-es6.module';
import widgetLevelTs from './level-ts/level-ts.module';

export default angular
    .module('app.widgets', [
        widgetRating,
        widgetLevel,
        widgetLevelEs6,
        widgetLevelTs
    ])
    .name;