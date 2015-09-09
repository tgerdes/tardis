define(['../art', 'd3'], function(Art, d3) {

return Art.newArt({
    name: "Solid",
    description: "All LEDs are the same color, with slow transition to random color.",

    initialize: function initialize() {
        this.source = d3.hsl(Math.floor(Math.random() * 360), 1, 0.5);
        this.dest = d3.hsl(Math.floor(Math.random() * 360), 1, 0.5);
        this.framesPerColor = 100;
        this.scale = d3.scale.linear()
            .domain([0, this.framesPerColor])
            .interpolate(d3.interpolateHcl)
            .range([this.source, this.dest]);
    },

    update: function update() {
        var val = this.frameNumber % this.framesPerColor;
        if (val == 0) {
            this.source = this.dest;
            this.dest = d3.hsl(Math.floor(Math.random() * 360), 1, 0.5);
            this.scale.range([this.source, this.dest]);
        }
        var pix = this.scale(val);
        for(var i=0;i<this.pixels.length;i++) {
            this.pixels[i] = pix;
        }
    },
});

});
