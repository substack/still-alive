var notes = require('audio-notes');
var music = require('./music.json');
var bps = 120 / 60;

module.exports = function (t) {
    var note = music[Math.floor(t * bps * 4) % music.length];
    var sum = 0;
    for (var i = 0, l = note.length; i < l; i++) {
        var x = notes[note[i]];
        sum += 0
            + sin(x / 2) * 0.2
            + sin(x / 2 + 2) * 0.2
            + sin(x) * 0.3 + sin(x + 8) * 0.15
            + sin(x * 2 + sin(400 * x)) * 0.15
            + sin(x * 2 + 4) * 0.1
            + sin(x * 3) * 0.25
            + sin(x * 4 + sin(100 * x)) * 0.1
        ;
    }
    return l ? sum / Math.sqrt(l) : 0;
    
    function sin (x) {
        return Math.sin(2 * Math.PI * (t % 4) * x);
    }
};
