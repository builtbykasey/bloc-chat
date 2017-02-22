(function () {
    function HomeCtrl($scope, $uibModal, Room) {
    
        $scope.chatRooms = Room.all;
        $scope.currentRoom = null;
        
        $scope.open = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
            });
            
            modalInstance.result.then(function(name) {
				Room.addRoom(name);
			});
            
        };
        
        $scope.setRoom = function(rooms) {
            $scope.currentRoom = rooms;
            
            
        };
        
        
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', '$uibModal', 'Room', HomeCtrl]);
    
})();