define(['../art', 'd3'], function(Art, d3) {

return Art.newArt({
    name: "Chase",
    description: "Knightrider style LED chaser",
    update: function update() {
        var col = this.frameNumber % 12;
        if (col > 5) {
            col = 11 - col;
        }
        for(var i=0;i<this.pixels.length;i++) {
            var x = Math.floor((i % 24) / 4);
            if (x == col) {
                this.pixels[i] = d3.rgb(255, 0, 0);
            } else { 
                this.pixels[i] = d3.rgb(0, 0, 0);
            }
        }
    },
});

});
