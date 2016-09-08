import widgetRating from './rating/rating.module';
import widgetLevelSep from './level-sep/level-sep.module';
import widgetLevel from './level/level.module';
import widgetLevelEs6 from './level-es6/level-es6.module';
import widgetLevelEs6Sep from './level-es6-sep/level-es6-sep.module';
import widgetLevelTs from './level-ts/level-ts.module';
import widgetLevelTsSep from './level-ts-sep/level-ts-sep.module';

export default angular
    .module('app.widgets', [
        widgetRating,
        widgetLevel,
        widgetLevelSep,
        widgetLevelEs6,
        widgetLevelEs6Sep,
        widgetLevelTs,
        widgetLevelTsSep
    ])
    .name;