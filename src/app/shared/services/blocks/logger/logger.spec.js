let logger;

describe('logger', () => {
    beforeEach(() => {
        angular.mock.inject((_logger_) => {
            logger = _logger_;
        });
    });

    it('should return the string \'My Awesome Logger\'', function() {
        expect('My Awesome Logger').toBe(logger.getText());
    });
});
