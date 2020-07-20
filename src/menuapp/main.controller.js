(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuAppController', MenuAppController);


MenuAppController.$inject = ['items'];
function MenuAppController(items) {
  var categories = this;
  categories.items = items.data;
  //console.log(categories.items)
}

})();
