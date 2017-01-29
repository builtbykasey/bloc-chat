//just to see if it would work
(function() {
    function ModalCtrl($scope, $uibModalInstance, Room) {
        $scope.rooms = Room;
        
        
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModalInstance', 'Room', ModalCtrl]);
})();