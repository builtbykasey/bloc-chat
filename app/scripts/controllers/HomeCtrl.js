(function () {
    function HomeCtrl($scope, $uibModal, Room, Message) {
    
        $scope.chatRooms = Room.all;
        $scope.currentRoom = null;
        $scope.listMessages = null;

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
            $scope.listMessages = Message.all;
        };
        
        
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', '$uibModal', 'Room', 'Message', HomeCtrl]);
    
})();