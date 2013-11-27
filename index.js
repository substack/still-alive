var notes = require('audio-notes');
var music = [
    ['G5'],['G5'],
    ['F5'],['F5'],
    ['E5'],['E5'],
    ['E5'],['E5'],
    
    ['F5','A3'],['F5','A3'],
    ['F5','D4'],['F5','D4'],
    ['F5','F4'],['F5','F4'],
    ['F5','D4'],['F5','D4'],
    ['B3'],['B3'],
    ['D4'],['D4'],
    ['F4'],['F4'],
    ['D4'],['D4'],
    
    ['A3'],['A3'],
    ['D4'],['D4'],
    ['F4'],['F4'],
    ['A4','D4'],['A4','D4'],
    ['G5','B3'],['G5','B3'],
    ['F5','D4'],['F5','D4'],
    ['E5','F4'],['E5','F4'],
    ['E5','D4'],['E5','D4'],
    
    ['E5','A3'],['E5','A3'],
    ['F5','D4'],['F5','D4'],
    ['F5','F4'],['F5','F4'],
    ['F5','D4'],['F5','D4'],
    ['D5','A3'],['D5','A3'],
    ['D5','D4'],['D5','D4'],
    ['E5','F4'],['E5','F4'],
    ['A4','D4'],['A4','D4'],
    
];
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
