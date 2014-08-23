(function() {
  var app;

  app = angular.module("app", ['ngRoute']);

  app.config(function($routeProvider) {
    return $routeProvider.when("/", {
      templateUrl: "pages/main.html",
      controller: "mainController"
    }).when("/work", {
      templateUrl: "pages/main.html",
      controller: "mainController",
      title: "Product Design & Frontend Development"
    }).when("/art", {
      templateUrl: "pages/art.html",
      controller: "artController"
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
    }).otherwise({
      redirectTo: "/",
      title: "Product Design & Frontend Development"
    });

  });

  app.run(['$location', '$rootScope', function($location, $rootScope) {
      $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
          $rootScope.title = current.$$route.title;
      });
  }]);

  app.controller("mainController", function($scope) {
  
    $scope.projects = [
      {title: "Confluence", path: "confluence", tagline: "Crowdsourced Q&A for foreign language learners"},
      {title: "DaVinci Mobile", path: "davinci", tagline: "LinkedIn's mobile pattern library for designers and developers"},
      {title: "Introduction to Illustrator & Photoshop", path: "decal", tagline: "A weekly 2-hour, 2-unit UC Berkeley DeCal course"},
      {title: "32pt", path: "32pt", tagline: "Beautiful, affordable, custom letterpress business cards"},

    ]

  });

  app.controller("artController", function($scope) {
    
  });

  app.controller("aboutController", function($scope) {
    
  });


  app.controller("resumeController", function($scope) {
    
  });

  app.controller("davinciController", function($scope, $routeParams) {
    $scope.params = "davinci";

  });

  app.controller("decalController", function($scope, $routeParams) {
    $scope.params = "decal";
    
  });

  app.controller("confluenceController", function($scope, $routeParams) {
  
    $scope.params = "confluence";
    console.log($scope.params);

  });

  app.controller("32ptController", function($scope, $routeParams) {
    $scope.params = "32pt";
  });





}).call(this);