import SessionService from './session.service';
import UserService from './user.service';
import AuthorizationMethodsService from './authorization-methods.service';

export default angular
  .module('session', [])
  .service('SessionService', SessionService)
  .service('UserService', UserService)
  .constant('AuthorizationMethodsService', AuthorizationMethodsService)
  .name;
