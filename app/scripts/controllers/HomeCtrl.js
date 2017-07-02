(function () {
    function HomeCtrl($scope, $uibModal, Room, Message, $cookes) {

        $scope.chatRooms = Room.all;
        $scope.currentRoom = null;
        $scope.listMessages = null;
        $scope.required = true;

        $scope.setRoom = function(room) {
            $scope.currentRoom = room;
            $scope.listMessages = Message.getByRoomId(room.$id);
            console.log("test");
        };

        $scope.sendMessage = function(newMessage) {
            if (newMessage) {
                Message.send(newMessage, $scope.currentRoom.$id);
                $scope.newMessage = "";
            }
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
