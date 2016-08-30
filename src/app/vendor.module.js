import "angular";
import "angular-route";
import "toastr";
import "lodash";
import 'expose?window.jQuery!expose?$!expose?jQuery!jquery'; // We have to expose jQuery, otherwise bootstrap-sass is not happy (i.e. Uncaught Error: Bootstrap's JavaScript requires jQuery)
import "app/components/core/closure/closure";
import "bootstrap-sass";