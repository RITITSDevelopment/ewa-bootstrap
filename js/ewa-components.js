/*!
 * Common EWA angular directives.
 */

(function(angular) {

angular.module('ewa.components', ['ewa.components.tpls', 'ewa.components.ritHeader', 'ewa.components.ritBranding', 'ewa.components.ritMenubar', 'ewa.components.ritFooter']);
angular.module('ewa.components.tpls', ['templates/rit-header/rit-header.html', 'templates/rit-branding/rit-branding.html', 'templates/rit-menubar/rit-menubar.html', 'templates/rit-footer/rit-footer.html']);

angular.module('ewa.components.ritHeader', [])
.directive('ritHeader', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/rit-header/rit-header.html'
  };
});

angular.module('ewa.components.ritBranding', [])
.directive('ritBranding', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/rit-branding/rit-branding.html',
    scope: {
      title: '@ritBrandingTitle',
      subtitle: '@ritBrandingSubtitle',
      link: '@ritBrandingLink'
    }
  };
});

angular.module('ewa.components.ritMenubar', [])
.directive('ritMenubar', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/rit-menubar/rit-menubar.html',
    transclude: true
  };
});

angular.module('ewa.components.ritFooter', [])
.directive('ritFooter', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/rit-footer/rit-footer.html'
  };
});

angular.module('templates/rit-header/rit-header.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('templates/rit-header/rit-header.html',
    '<div class="ritheader navbar navbar-inverse">' +
      '<div class="container">' +
        '<div class="navbar-header">' +
          '<a class="navbar-brand" href="http://www.rit.edu/"><img src="dist/images/rit-logo-orange.jpg" alt="Rochester Institute of Technology"></a>' +
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

angular.module('templates/rit-branding/rit-branding.html', []).run(['$templateCache', function($templateCache){
  $templateCache.put('templates/rit-branding/rit-branding.html',
    '<div class="branding-wrapper">' +
      '<div class="branding container">' +
        '<h1 class="branding-logo">' +
          '<a href="{{link}}">{{title}}</a> ' +
          '<small>{{subtitle}}</small>' +
        '</h1>' +
      '</div>' +
    '</div>'
  );
}]);

angular.module('templates/rit-menubar/rit-menubar.html', []).run(['$templateCache', function($templateCache){
  $templateCache.put('templates/rit-menubar/rit-menubar.html',
    '<div class="menubar">' +
      '<div class="container">' +
        '<ul class="nav nav-pills nav-justified" ng-transclude></ul>' +
      '</div>' +
    '</div>'
  );
}]);

angular.module('templates/rit-footer/rit-footer.html', []).run(['$templateCache', function($templateCache){
  $templateCache.put('templates/rit-footer/rit-footer.html',
    '<div class="footer-wrapper" id="bottom">' +
      '<footer id="footer" class="footer container">' +
        '<div class="row">' +
          '<div class="col-sm-6">' +
            '<small>Copyright 2014 &copy; Rochester Institute of Technology</small><br>' +
            '<small>All Rights Reserved | ' +
              '<a href="http://www.rit.edu/legal/disclaimer_page.html">Disclaimer</a> | ' +
              '<a href="http://www.rit.edu/dmca.html">Copyright Infringement</a>' +
            '</small>' +
          '</div>' +
          '<div class="col-sm-6 text-right-sm">' +
            '<small>One Lomb Memorial Drive, Rochester, NY 14623-5603</small><br> ' +
            '<small>Questions or comments? ' +
              '<a href="http://www.rit.edu/ask/">Send us feedback.</a> ' +
              'Telephone: 585-475-2411' +
            '</small>' +
          '</div>' +
        '</div>' +
      '</footer>' +
    '</div>'
  );
}]);

})(window.angular);
