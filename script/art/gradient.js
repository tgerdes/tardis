define(['../art', 'd3'], function(Art, d3) {
    function Gradient() {
        // Interpolate the range -1, 1 to the integers 0, 255
        this.interp = d3.scale.linear().domain([-1,1]).rangeRound([0,255]);
        this.step = 2 * Math.PI / 16;
    }
    Gradient.prototype = Object.create(Art.prototype);
    Gradient.prototype.name = "Gradient";
    Gradient.prototype.description = "Cycle single color gradients on each face.";

    Gradient.prototype.update = function() {
        for(i=0;i<this.pixels.length;i++) {
            var pane = Math.floor(i / (12));
            var x = Math.floor((i % 12) / 4);
            var y = ((i % 12) % 4);
            if(pane<2) {
                this.pixels[i] = d3.rgb(this.interp(Math.sin(this.step * (x+this.frameNumber))), 0, 0);
            } else if (pane < 4) {
                this.pixels[i] = d3.rgb(0, this.interp(Math.sin(this.step * (y+this.frameNumber))), 0);
            } else if (pane < 6) {
                this.pixels[i] = d3.rgb(0, 0, this.interp(Math.sin(this.step * (x-this.frameNumber))));
            } else {
                var v = this.interp(Math.sin(this.step * (y-this.frameNumber)));
                this.pixels[i] = d3.rgb(v, 0, v);
            }
        }
    }
    return Gradient;
});
