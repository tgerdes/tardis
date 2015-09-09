define(['../art', 'd3'], function(Art, d3) {

return Art.newArt({
    name: "Sine",
    description: "Three sine waves slightly out of phase.",

    initialize: function() {
        this.interp = d3.scale.linear().domain([-1,1]).range([0,3]);
        this.step = 2 * Math.PI / 8;
        this.toint = d3.scale.linear().domain([0, 1]).rangeRound([255, 0]);
    },
    update: function() {
        for(x=0; x<24; x++) {
            rsinVal = this.interp(Math.sin((this.frameNumber      +x) * this.step ));
            gsinVal = this.interp(Math.sin((this.frameNumber*1.02 +x) * this.step ));
            bsinVal = this.interp(Math.sin((this.frameNumber*1.01 +x) * this.step ));
            for(y=0; y<4; y++) {
                i = x * 4 + y;
                this.pixels[i] = d3.rgb(
                    this.toint(Math.abs(y-rsinVal)),
                    this.toint(Math.abs(y-gsinVal)),
                    this.toint(Math.abs(y-bsinVal))
                )
            }
        }
    },
});

});
