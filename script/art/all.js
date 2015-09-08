define([
    './revolve',
    './chase',
    './solid',
    './faces',
    './gradient',
    './sine',
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
