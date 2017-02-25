(function () {
    function HomeCtrl($scope, $uibModal, Room, Message) {
    
        $scope.chatRooms = Room.all;
        $scope.currentRoom = null;
        $scope.listMessages = null;

        $scope.setRoom = function(room) {
            $scope.currentRoom = room;
            $scope.listMessages = Message.all;  
            console.log("test");
        };
        
        $scope.open = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
            });
            
            modalInstance.result.then(function(name) {
				Room.addRoom(name);
			});
            
        };
        
        
        
        
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', '$uibModal', 'Room', 'Message', HomeCtrl]);
    
})();