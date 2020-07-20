(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuapp/templates/menulist.template.html',
  bindings: {
    items: '<'
  }
});

})();
