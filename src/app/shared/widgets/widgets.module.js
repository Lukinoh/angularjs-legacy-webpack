import widgetRating from './rating/rating.module';
import widgetLevelEs5Sep from './level-es5-sep/level-es5-sep.module';
import widgetLevelEs5 from './level-es5/level-es5.module';
import widgetLevelEs6 from './level-es6/level-es6.module';
import widgetLevelEs6Sep from './level-es6-sep/level-es6-sep.module';
import widgetLevelTs from './level-ts/level-ts.module';
import widgetLevelTsSep from './level-ts-sep/level-ts-sep.module';

export default angular
    .module('app.widgets', [
        widgetRating,
        widgetLevelEs5,
        widgetLevelEs5Sep,
        widgetLevelEs6,
        widgetLevelEs6Sep,
        widgetLevelTs,
        widgetLevelTsSep
    ])
    .name;