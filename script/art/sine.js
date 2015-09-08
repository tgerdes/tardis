define(['../art', 'd3'], function(Art, d3) {
    function Sine() {
        this.interp = d3.scale.linear().domain([-1,1]).range([0,3]);
        this.step = 2 * Math.PI / 8;
        this.toint = d3.scale.linear().domain([0, 1]).rangeRound([255, 0]);
    }
    Sine.prototype = Object.create(Art.prototype);
    Sine.prototype.name = "Sine";
    Sine.prototype.description = "Three sine waves slightly out of phase.";


    Sine.prototype.update = function() {
        for(x=0; x<24; x++) {
            rsinVal = this.interp(Math.sin((this.frameNumber      +x) * this.step ));
            gsinVal = this.interp(Math.sin((this.frameNumber*1.02 +x) * this.step ));
            bsinVal = this.interp(Math.sin((this.frameNumber*1.01 +x) * this.step ));
            for(y=0; y<4; y++) {
                i = x * 4 + y;
                this.pixels[i].r = this.toint(Math.abs(y-rsinVal));
                this.pixels[i].g = this.toint(Math.abs(y-gsinVal));
                this.pixels[i].b = this.toint(Math.abs(y-bsinVal));
            }
        }
    }
    return Sine;
});
