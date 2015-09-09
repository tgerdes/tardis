define(['../art', 'd3'], function(Art, d3) {

return Art.newArt({
    name: "Faces",
    description: "Each Face transitions solid between rainbow colors.",

    initialize: function start(OPC) {
        var keyColors = [
            d3.rgb("red"),
            d3.rgb("orange"),
            d3.rgb("yellow"),
            d3.rgb("green"),
            d3.rgb("blue"),
            d3.rgb("indigo"),
            d3.rgb("violet"),
            d3.rgb("red"),
        ];
        var framesPerColor = 100;
        this.faces = 4;
        this.totalFrames = (keyColors.length-1) * framesPerColor;
        this.faceOffset = this.totalFrames / this.faces;
        this.speedMultiplier = 10;

        this.scale = d3.scale.linear()
            .domain(keyColors.map(function(x, i) { return i * framesPerColor }))
            .interpolate(d3.interpolateHcl)
            .range(keyColors);

    },

    update: function update() {
        for(var i=0;i<this.pixels.length;i++) {
            var face = Math.floor(i / (24));
            this.pixels[i] = this.scale(
                (face * this.faceOffset + this.speedMultiplier * this.frameNumber) % this.totalFrames
            );
        }
    },
});

});
