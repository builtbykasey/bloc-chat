(function() {

    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        
        
        //rooms.$add({ name: "newRoom" });
        
        return {
            all: rooms  
        };
    
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);

})();