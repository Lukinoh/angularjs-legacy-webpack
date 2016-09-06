let DashboardController;

describe('DashboardController', () => {
    beforeEach(() => {
        angular.mock.inject(($controller, $rootScope) => {
            DashboardController = $controller('DashboardController as vm', { $scope: $rootScope.$new() });
        });
    });

    it('should return the expected string \'My Awesome String\'', function() {
        var t = 'https://github.com/preboot/angular-webpack';
        //expect(t).toBe('https://github.com/preboot/angular-webpack');
        expect('My Awesome String').toBe(DashboardController.getText());
    });
});
