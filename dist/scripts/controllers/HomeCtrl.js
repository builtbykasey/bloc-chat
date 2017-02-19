(function () {
    function HomeCtrl($scope, $uibModal, Room) {
    
        $scope.chatRooms = Room.all;
        
        $scope.open = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
            });
            
            $scope.modalInstance.result.then(function (selectedItem) {
                this.selected = selectedItem;
                this.roomService.addRoom(selectedItem);
            }, function () {
            $log.info('Modal dismissed at: ' + new Date());
            });
            
        };
        
        
        
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', '$uibModal', 'Room', HomeCtrl]);
    
})();