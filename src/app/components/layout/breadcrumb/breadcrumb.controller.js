'use strict';

(function () {
  angular.module('rt-layout').controller('BreadcrumbController', BreadcrumbController);

  function BreadcrumbController(BreadcrumbService, $rootScope) {
    var vm = this;
    vm.infos = BreadcrumbService.infos();

    $rootScope.$on('$stateChangeSuccess', whenStateChange);

    function whenStateChange() {
      vm.infos = BreadcrumbService.infos();
    }
  }
})();
