declare namespace MY {
    type AWESOME_STRING = string;
}

// Old way to make possible to require html file in typescript
// const dashboardTsHtml = require('./dashboard-ts.controller.html');
// declare function require(myString: string): string;

// New way to make possible to require html file in typescript
// import * as dashboardTsHtml from './dashboard-ts.controller.html';
declare module '*.html'


declare var angular: angular.IAngularStatic;
