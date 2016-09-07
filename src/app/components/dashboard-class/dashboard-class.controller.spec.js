let DashboardClassController;

describe('DashboardClassController', () => {
    beforeEach(() => {
        angular.mock.inject(($controller, $rootScope) => {
            DashboardClassController = $controller('DashboardClassController as vm', { $scope: $rootScope.$new() });
        });
    });

    it('should return the string \'My Awesome Dashboard Class\'', function() {
        expect('My Awesome Dashboard Class').toBe(DashboardClassController.getText());
    });
});
