define(['../art', 'd3'], function(Art, d3) {

return Art.newArt({
    name: "Gradient",
    description: "Cycle single color gradients on each face.",

    initialize: function () {
        // Interpolate the range -1, 1 to the integers 0, 255
        this.interp = d3.scale.linear().domain([-1,1]).rangeRound([0,255]);
        this.step = 2 * Math.PI / 16;
    },

    update: function() {
        for(i=0;i<this.pixels.length;i++) {
            var face = Math.floor(i / (24));
            var x = Math.floor((i % 12) / 4);
            var y = ((i % 12) % 4);
            if(face==0) {
                this.pixels[i] = d3.rgb(this.interp(Math.sin(this.step * (x+this.frameNumber))), 0, 0);
            } else if (face == 1) {
                this.pixels[i] = d3.rgb(0, this.interp(Math.sin(this.step * (y+this.frameNumber))), 0);
            } else if (face == 2) {
                this.pixels[i] = d3.rgb(0, 0, this.interp(Math.sin(this.step * (x-this.frameNumber))));
            } else {
                var v = this.interp(Math.sin(this.step * (y-this.frameNumber)));
                this.pixels[i] = d3.rgb(v, 0, v);
            }
        }
    },
});

});
