define(['../art', 'd3'], function(Art, d3) {
    function Gradient() {
        // Interpolate the range -1, 1 to the integers 0, 255
        this.interp = d3.scale.linear().domain([-1,1]).rangeRound([0,255]);
        this.step = 2 * Math.PI / 16;
    }
    Gradient.prototype = Object.create(Art.prototype);
    Gradient.prototype.description = "Cycle single color gradients on each face.";


    Gradient.prototype.update = function() {
        for(i=0;i<this.pixels.length;i++) {
            var pane = Math.floor(i / (12));
            var x = Math.floor((i % 12) / 4);
            var y = ((i % 12) % 4);
            if(pane<2) {
                this.pixels[i].r = this.interp(Math.sin(this.step * (x+this.frameNumber)));
            } else if (pane < 4) {
                this.pixels[i].g = this.interp(Math.sin(this.step * (y+this.frameNumber)));
            } else if (pane < 6) {
                this.pixels[i].b = this.interp(Math.sin(this.step * (x-this.frameNumber)));
            } else {
                this.pixels[i].r =
                this.pixels[i].b = this.interp(Math.sin(this.step * (y-this.frameNumber)));
            }
        }
    }
    return Gradient;
});
