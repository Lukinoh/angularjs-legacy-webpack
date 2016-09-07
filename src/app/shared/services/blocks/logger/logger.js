export default logger;

function logger($log, toastr) {
    'ngInject';

    var service = {
        showToasts: true,

        error: error,
        info: info,
        success: success,
        warning: warning,

        // Used as testing example for services
        getText: getText,

        // straight to console; bypass toastr
        log: $log.log
    };

    return service;

    /////////////////////

    function error(message, data, title) {
        toastr.error(message, title);
        $log.error('Error: ' + message, data);
    }

    function info(message, data, title) {
        toastr.info(message, title);
        $log.info('Info: ' + message, data);
    }

    function success(message, data, title) {
        toastr.success(message, title);
        $log.info('Success: ' + message, data);
    }

    function warning(message, data, title) {
        toastr.warning(message, title);
        $log.warn('Warning: ' + message, data);
    }

    function getText() {
        return 'My Awesome Logger';
    }
}