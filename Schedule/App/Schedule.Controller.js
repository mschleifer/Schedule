(function () {
    'use strict';

    angular
        .module('ScheduleApp')
        .controller('ScheduleController', ['$mdSidenav', '$mdBottomSheet', startup])
        .controller('ListBottomSheetCtrl', function ($scope, $mdBottomSheet) {
            $scope.items = [
              { name: 'Share', icon: 'share' },
              { name: 'Upload', icon: 'backup' },
              { name: 'Copy', icon: 'content_copy' },
              { name: 'Print this page', icon: 'print' },
            ];
            $scope.listItemClick = function ($index) {
                var clickedItem = $scope.items[$index];
                $mdBottomSheet.hide(clickedItem);
            };
        });

    function startup($mdSidenav, $mdBottomSheet) {
        var controllerScope = this;
        controllerScope.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
        controllerScope.toggleSidenav = function (menuId) {
            $mdSidenav(menuId).toggle();
        };

        controllerScope.showDayEditBottomSheet = function ($event) {
            controllerScope.alert = '';
            $mdBottomSheet.show({
                templateUrl: 'BottomSheet_DayEdit.html',
                controller: 'ListBottomSheetCtrl',
                targetEvent: $event
            }).then(function (clickedItem) {
                controllerScope.alert = clickedItem.name + ' clicked!';
            });
        };
    }

})();