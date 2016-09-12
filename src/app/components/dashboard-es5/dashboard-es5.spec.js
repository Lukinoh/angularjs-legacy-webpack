let DashboardEs5Controller;

describe('DashboardEs5Controller', () => {
    beforeEach(() => {
        angular.mock.inject(($controller, $rootScope) => {
            DashboardEs5Controller = $controller('DashboardEs5Controller as vm', { $scope: $rootScope.$new() });
        });
    });

    it('should return the string \'My Awesome Dashboard\'', function() {
        expect('My Awesome Dashboard Es5').toBe(DashboardEs5Controller.getText());
    });
});
