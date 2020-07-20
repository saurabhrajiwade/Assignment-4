(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/menuapp.template.html',
    controller: 'MenuAppController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        var promise = MenuDataService.getAllCategories();
          return promise;
      }]

    }
  })

  // Item detail
  .state('items', {
    url: '/items/{shortname}',
    templateUrl: 'src/menuapp/templates/item-detail.template.html',
    controller: 'ItemsController as itemList',
    resolve: {
      items1: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
        var promise = MenuDataService.getItemsForCategory($stateParams.shortname);
          return promise;
      }]
    }
  });

}

})();
