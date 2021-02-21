(function(window) {
    var byeSpeaker = new Object();
    var speakWord = "Good Bye";
    byeSpeaker.speak = function speak(names) {
        console.log(speakWord + " " + names);
    };
    window.byeSpeaker = byeSpeaker;
})(window);
