(function () {
    function HomeCtrl($scope, $uibModal, Room) {
    
        $scope.chatRooms = Room.all;
        
        this.open = function () {

            $uibModal.open({
                animation: true, 
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                size: 'sm', 
            });
            
        };
        
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', '$uibModal', 'Room', HomeCtrl]);
    
})();