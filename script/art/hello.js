define(['../art', 'd3'], function(Art, d3) {

return Art.newArt({

    name: "Hello",
    description: "Hello world with tiny font by Matthew Welch",
    initialize: function initialize() {
        // Tiny font
        // Copyright (C) 2004 by Matthew Welch
        // http://www.squaregear.net/fonts/tiny.shtml
        this.font = {
            // TODO: enter the rest of the font for use elsewhere?
            H: [1,1,1,1, 0,0,1,0, 1,1,1,1,],
            W: [1,1,1,0, 0,0,0,1, 0,1,1,0, 0,0,0,1, 1,1,1,0,],
            d: [0,0,1,0, 0,1,0,1, 1,1,1,1,],
            e: [0,0,1,0, 0,1,1,1, 0,1,0,1,],
            l: [1,1,1,1,],
            o: [0,0,1,0, 0,1,0,1, 0,0,1,0,],
            r: [0,1,1,1, 0,1,0,0,],
        }
        this.string = "Hello World";
        this.textPixels = [];
        for(var i=0; i < 24; i++) {
            this.textPixels.push(0,0,0,0);
        }
        for(var i=0; i < this.string.length; i++) {
            var c = this.font[this.string[i]];
            if(c) {
                this.textPixels.push.apply(this.textPixels, c);
            }
            this.textPixels.push(0,0,0,0);
        }

        console.log(this.textPixels);
        console.log(this.textPixels.length);
    },
    update: function update() {
        for(var i=0; i < this.pixels.length; i++) {
            var j = (Math.floor(this.frameNumber/5)*4 + i) % this.textPixels.length;
            if(this.textPixels[j]==1) {
                this.pixels[i] = d3.rgb(255, 0, 0);
            } else {
                this.pixels[i] = d3.rgb(0, 0, 0);
            }
        }
    },
});

})
