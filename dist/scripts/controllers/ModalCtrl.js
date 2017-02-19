(function() {
    function ModalCtrl($scope, $uibModalInstance){
        $scope.newRoom = {};
        
        $scope.newRoom.name = "";
        
        $scope.ok = function(){
            $uibModalInstance.close($scope.text);
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModalInstance', ModalCtrl])
})();