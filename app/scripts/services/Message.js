(function() {
    function Message($firebaseArray, $cookies) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        return {
            getByRoomId: function (roomId) {
                console.log(roomId);
                return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
            },
            send: function(newMessage, roomId) {
				          var message = {
					               username: $cookies.get('blocChatCurrentUser'),
					               content: newMessage,
					               sentAt: new Date().toString(),
					               roomId: roomId
				          }
				          messages.$add(message);
			      },
            all: messages
        };
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
