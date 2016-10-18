import * as dashboardTsHtml from './dashboard-ts.controller.html';

export default setRoute;

function setRoute($routeProvider, AuthorizationMethodsService) {
  'ngInject';
  $routeProvider
    .when('/dashboard-ts', {
      template: dashboardTsHtml,
      controller: 'DashboardTsController',
      controllerAs: 'vm',
      reloadOnSearch: false,
      data: {
        permissions: {
          only: ['USERF', 'USER'],
          params: {
            paramOne: 'true'
          }
          // redirectTo: {
            // USERF: {
            //   state:  '/font-zarbi',
            //   params: {
            //     paramOne: 'one',
            //     paramTwo: 'two'
            //   }
            // },
            // USER: {
            //   state:  '/music',
            //   params: {
            //     paramOne: 'one',
            //     paramTwo: 'two'
            //   }
            // },

            // default: {
            //   state:  AuthorizationMethodsService.redirectToHome,
            //   params: {
            //     paramOne: 'one',
            //     paramTwo: 'two'
            //   }
            // }
            // default: function (permissionName, transitionProperties) {
            //   console.log(permissionName);
            //   console.log(transitionProperties.next);
            //   return {
            //     state: '/home',
            //     params: {
            //       origin: transitionProperties.next.$$route.originalPath,
            //     }
            //   }
            // }
          // redirectTo: () => {
          //   return {
          //     state: AuthorizationMethodsService.redirectToHome,
          //         params: {
          //           paramOne: 'one',
          //           paramTwo: 'two'
          //         }
          //   }
          // }
        }
      }
    });
}
