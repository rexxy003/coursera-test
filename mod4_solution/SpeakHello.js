(function(window) {
    var helloSpeaker = new Object();
    var speakWord = "Hello";
    helloSpeaker.speak = function(names) {
        console.log(speakWord + " " + names);
    };
    window.helloSpeaker = helloSpeaker;
})(window);
