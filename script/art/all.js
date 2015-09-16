define([
    './solid',
    './hello',
    './random',
    './revolve',
    './chase',
    './faces',
    './gradient',
    './sine',
    './audio',
], function() {
    var arts = Array.prototype.slice.call(arguments);
    return arts.map(function(art) { return new (art)() }).map(function(art, i) {
        return {
            id: i,
            value: art,
            text: art.name,
            description: art.description,
        }
    });
})
