(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      // Do something to allow users to set their username
        
        $uibModal.open({
            templateUrl: '/templates/username.html',
            controller: 'UserModalCtrl',
            size: 'sm',
            backdrop: 'static'
            
        })
        
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();