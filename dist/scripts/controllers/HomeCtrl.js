(function () {
    function HomeCtrl($scope, $uibModal, Room, Message, $cookes) {
    
        $scope.chatRooms = Room.all;
        $scope.currentRoom = null;
        $scope.listMessages = null;

        $scope.setRoom = function(room) {
            $scope.currentRoom = room;
            $scope.listMessages = Message.all;  
            console.log("test");
        };
        
        $scope.sendMessage = function(newMessage) {
            Message.send(newMessage, $scope.currentRoom.$id);
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
        .controller('HomeCtrl', ['$scope', '$uibModal', 'Room', 'Message', '$cookies', HomeCtrl]);
    
})();