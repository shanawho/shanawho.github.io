(function() {
  var app;
  app = angular.module("app", ['ngRoute']);

  app.config(function($routeProvider) {
    return $routeProvider.when("/", {
      templateUrl: "pages/main.html",
      controller: "mainController",
      title: "Designer & Developer"
    }).when("/main", {
      templateUrl: "pages/main.html",
      controller: "mainController",
      title: "Product Design & Frontend Development"
    }).when("/art", {
      templateUrl: "pages/art.html",
      controller: "artController",
      title: "Art"
    }).when("/about", {
      templateUrl: "pages/about.html",
      controller: "aboutController",
      title: "About"
    }).when("/resume", {
      templateUrl: "pages/resume.html",
      controller: "resumeController",
      title: "Resume"
    }).when("/davinci", {
      templateUrl: "pages/davinci.html",
      controller: "davinciController",
      title: "DaVinci Mobile"
    }).when("/decal", {
      templateUrl: "pages/decal.html",
      controller: "decalController",
      title: "Introduction to Photoshop & Illustrator"
    }).when("/confluence", {
      templateUrl: "pages/confluence.html",
      controller: "confluenceController",
      title: "Confluence"
    }).when("/32pt", {
      templateUrl: "pages/32pt.html",
      controller: "32ptController",
      title: "32pt"
    }).when("/lettering", {
      templateUrl: "pages/lettering.html",
      controller: "mainController",
      title: "Lettering"
    });

  });

  app.run(['$location', '$rootScope', function($location, $rootScope) {
      $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
          $rootScope.title = current.$$route.title;
      });
  }]);

  app.controller("navController", function($scope, $location) {
    $scope.isActive = function(viewLocation) {
      return viewLocation === $location.path();
    };
  });

  app.controller("mainController", function($scope) {

    $scope.projects = [
      {title: "Confluence", path: "confluence", tagline: "Crowdsourced Q&A for foreign language learners"},
      {title: "DaVinci Mobile", path: "davinci", tagline: "LinkedIn's mobile pattern library for designers & developers"},
      {title: "Introduction to Illustrator & Photoshop", path: "decal", tagline: "A weekly 2-hour, 2-unit UC Berkeley DeCal course"},
      {title: "32pt", path: "32pt", tagline: "A custom design editor for letterpressed business cards"},
      {title: "Lettering", path: "lettering", tagline: "Illustrative typography"},
      {title: "Artwork", path: "art", tagline: "Portraiture & paintings"}
    ];


  });

  app.controller("artController", function($scope) {
    $scope.params = "art";
  });

  app.controller("aboutController", function($scope) {
    $scope.params = "about";

  });


  app.controller("resumeController", function($scope) {
    $scope.params = "resume";
  });

  app.controller("davinciController", function($scope, $routeParams) {
    $scope.params = "davinci";

  });

  app.controller("decalController", function($scope, $routeParams) {
    $scope.params = "decal";
    
  });

  app.controller("confluenceController", function($scope, $routeParams) {
    $scope.params = "confluence";

  });

  app.controller("32ptController", function($scope, $routeParams) {
    $scope.params = "32pt";
  });


  app.controller("letteringController", function($scope, $routeParams) {
    $scope.params = "lettering";
  });


  app.controller("53Controller", function($scope, $routeParams) {
    $scope.params = "53";
  });







}).call(this);