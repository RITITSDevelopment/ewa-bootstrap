/*!
 * Common EWA angular directives.
 */

(function(angular) {

angular.module('ewa.components', ['ewa.components.tpls', 'ewa.components.ritheader']);
angular.module('ewa.components.tpls', ['templates/ritheader/ritheader.html']);

angular.module('ewa.components.ritheader', [])
.directive('ritheader', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/ritheader/ritheader.html'
  };
});

angular.module('templates/ritheader/ritheader.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('templates/ritheader/ritheader.html',
    '<div class="ritheader navbar navbar-inverse">' +
      '<div class="container">' +
        '<div class="navbar-header">' +
          '<a class="" href="http://www.rit.edu/"><img src="dist/images/rit-logo-orange.jpg" alt="Rochester Institute of Technology"></a>' +
        '</div>' +
        '<div class="collapse navbar-collapse">' +
          '<ul class="nav navbar-nav navbar-right">' +
            '<li><a href="http://www.rit.edu/directories">Directories</a></li>' +
            '<li><a href="http://www.rit.edu/search">RIT Search</a></li>' +
            '<li><a href="http://www.rit.edu/">RIT Home</a></li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
    '</div>'
  );
}]);

})(window.angular);
