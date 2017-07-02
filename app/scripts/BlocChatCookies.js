(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {

        $uibModal.open({
            templateUrl: '/templates/username.html',
            controller: 'UserModalCtrl',
            backdrop: 'static'

        })

    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
