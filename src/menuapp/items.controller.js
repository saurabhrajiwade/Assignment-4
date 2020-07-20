(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

// Version with resolving to 1 item based on $stateParams in route config
ItemsController.$inject = ['items1'];
function ItemsController(items1) {
  var itemDetail = this;
  itemDetail.itemslist = items1.data;
  //console.log(itemDetail.itemslist);
}

})();
