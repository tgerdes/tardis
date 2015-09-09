define(['../art', 'd3'], function(Art, d3) {

return Art.newArt({
    name: "Random",
    description: "All random all the time.",

    initialize: function initialize() {
        this.i = d3.scale.linear().domain([0,1]).range([0,255]);
    },

    update: function update() {
        for(var i=0;i<this.pixels.length;i++) {
            this.pixels[i] = d3.rgb(
                this.i(Math.random()),
                this.i(Math.random()),
                this.i(Math.random())
            );
        }
    },
});

});
