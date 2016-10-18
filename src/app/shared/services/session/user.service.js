export default class SessionService {
  constructor() {
    'ngInject';
  }

  getUser1() {
    return {
      roles: ['ADMIN', 'USER', 'SUPERUSER']
    }
  }

  getUser2() {
    return {
      roles: ['SUPERUSER', 'ADMIN']
    }
  }

  getUser3() {
    return {
      roles: ['USER']
    }
  }
}
