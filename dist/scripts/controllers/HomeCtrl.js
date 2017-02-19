(function () {
    function HomeCtrl($scope, $uibModal, Room) {
    
        $scope.chatRooms = Room.all;
        
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
        .controller('HomeCtrl', ['$scope', '$uibModal', 'Room', HomeCtrl]);
    
})();