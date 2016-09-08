let DashboardEs6Controller;

describe('DashboardEs6Controller', () => {
    beforeEach(() => {
        angular.mock.inject(($controller, $rootScope) => {
            DashboardEs6Controller = $controller('DashboardEs6Controller as vm', { $scope: $rootScope.$new() });
        });
    });

    it('should return the string \'My Awesome Dashboard Es6\'', function() {
        expect('My Awesome Dashboard Es6').toBe(DashboardEs6Controller.getText());
    });
});
