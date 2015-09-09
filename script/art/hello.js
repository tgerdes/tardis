define(['../art', 'd3', './font/tiny'], function(Art, d3, font) {

return Art.newArt({

    name: "Hello",
    description: "Hello world with tiny font by Matthew Welch",
    initialize: function initialize() {
        this.string = "Hello World";
        this.textPixels = font.renderString(this.string);
        for(var i=0; i < 24; i++) {
            this.textPixels.unshift(0,0,0,0);
        }

        console.log(this.textPixels);
        console.log(this.textPixels.length);
    },
    update: function update() {
        for(var i=0; i < this.pixels.length; i++) {
            var j = (Math.floor(this.frameNumber/2)*4 + i) % this.textPixels.length;
            if(this.textPixels[j]==1) {
                this.pixels[i] = d3.rgb(255, 0, 0);
            } else {
                this.pixels[i] = d3.rgb(0, 0, 0);
            }
        }
    },
});

})
