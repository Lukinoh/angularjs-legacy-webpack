let DashboardController;

describe('DashboardController', () => {
    beforeEach(() => {
        angular.mock.inject(($controller, $rootScope) => {
            DashboardController = $controller('DashboardController as vm', { $scope: $rootScope.$new() });
        });
    });

    it('should return the string \'My Awesome Dashboard\'', function() {
        expect('My Awesome Dashboard').toBe(DashboardController.getText());
    });
});
