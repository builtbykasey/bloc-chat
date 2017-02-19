(function() {

    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        
        //rooms.$add({ name: "newRoom" });
        
        return {
            all: rooms,

            // add a new room
            addRoom: function (name) {
                rooms.$add({ name: "newRoom" });
		      }
        };
    
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);

})();