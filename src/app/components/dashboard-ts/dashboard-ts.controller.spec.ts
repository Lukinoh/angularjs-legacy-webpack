let DashboardTsController: any;

describe('DashboardTsController', () => {
    beforeEach(() => {
        angular.mock.inject(($controller, $rootScope) => {
            DashboardTsController = $controller('DashboardTsController as vm', { $scope: $rootScope.$new() });
        });
    });

    it('should return the string \'My Awesome Dashboard Ts\'', function() {
        expect('My Awesome Dashboard Ts').toBe(DashboardTsController.getText());
    });
});
