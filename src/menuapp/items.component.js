(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menuapp/templates/categories.template.html',
  bindings: {
    items1: '<'
  }
});

})();
