(function () {
    function HomeCtrl($scope, $uibModal, Room) {
    
        $scope.chatRooms = Room.all;
        
        this.open = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'modal.html',
                controller: 'ModalCtrl',
                size: 'sm'
            });
            
        };
        
        
        
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', '$uibModal', 'Room', HomeCtrl]);
    
})();