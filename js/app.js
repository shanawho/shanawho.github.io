

(function() {
  var app;
  app = angular.module("app", ['ngRoute']);

  app.config(function($routeProvider) {
    return $routeProvider.when("/", {
      templateUrl: "pages/main.html",
      controller: "mainController",
      title: "Designer & Developer"
    }).when("/paper", {
      templateUrl: "pages/paper.html",
      controller: "paperController",
      title: "Paper for iPhone: Onboarding"
    }).when("/about", {
      templateUrl: "pages/about.html",
      controller: "aboutController",
      title: "About"
    }).when("/resume", {
      templateUrl: "pages/resume.html",
      controller: "resumeController",
      title: "Resume"
    }).when("/lumina", {
      templateUrl: "pages/lumina.html",
      controller: "luminaController",
      title: "Lumina"
    }).when("/designatberkeley", {
      templateUrl: "pages/designatberkeley.html",
      controller: "berkeleyController",
      title: "Design at Berkeley"
    }).when("/davinci", {
      templateUrl: "pages/davinci.html",
      controller: "davinciController",
      title: "DaVinci Mobile"
    }).when("/intro", {
      templateUrl: "pages/decal.html",
      controller: "decalController",
      title: "Introduction to Photoshop & Illustrator"
    }).when("/confluence", {
      templateUrl: "pages/confluence.html",
      controller: "confluenceController",
      title: "Confluence"
    }).when("/type", {
      templateUrl: "pages/type.html",
      controller: "typeController",
      title: "Working with Typography"
    }).when("/lettering", {
      templateUrl: "pages/lettering.html",
      controller: "letteringController",
      title: "Working with Typography"
    }).otherwise({
      redirectTo: '/'
    });

  });


  app.run(['$location', '$rootScope', function($location, $rootScope) {
      $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
          $rootScope.title = current.$$route.title;

          $('body').css('opacity', 0);

          $('body').animate({
            opacity: 1
          }, 1000);
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


  app.controller("aboutController", function($scope) {
    $scope.params = "about";

  });


  app.controller("resumeController", function($scope) {
    $scope.params = "resume";
  });


  app.controller("paperController", function($scope) {
    $scope.nextProj = "davinci"
  });

  app.controller("davinciController", function($scope, $routeParams) {
    $scope.prevProj = "paper"
    $scope.nextProj = "designatberkeley"
  });
  app.controller("berkeleyController", function($scope, $routeParams) {
    $scope.prevProj = "davinci"
    $scope.nextProj = "lumina"
  });


  app.controller("luminaController", function($scope, $routeParams) {
    $scope.prevProj = "designatberkeley"
    $scope.nextProj = "confluence"
  });


  app.controller("confluenceController", function($scope, $routeParams) {
    $scope.prevProj = "lumina"
    $scope.nextProj = "type"
  });
  app.controller("typeController", function($scope, $routeParams) {

    $scope.prevProj = "confluence"
    $scope.nextProj = "intro"
  });


  app.controller("decalController", function($scope, $routeParams) {

    $scope.prevProj = "type"
    $scope.nextProj = "lettering"
  });

  app.controller("letteringController", function($scope, $routeParams) {

    $scope.prevProj = "type"
    $scope.nextProj = "paper"
  });







}).call(this);