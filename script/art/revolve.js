define(['../art', 'd3'], function(Art, d3) {
    function Revolve() {}
    Revolve.prototype = Object.create(Art.prototype);
    Revolve.prototype.name = "Revolve";
    Revolve.prototype.description = "Chase a LED around in a circle.";

    Revolve.prototype.update = function update() {
        var order = [0,4,8,12,16,20,21,22,23, 19, 15, 11, 7, 3, 2, 1];
        for(var i=0;i<this.pixels.length;i++) {
            var face = Math.floor(i / 24);
            var pixel = i % 24;
            if ( pixel == order[this.frameNumber % order.length] ) {
                this.pixels[i] = d3.rgb(255, 0, 0);
            } else {
                this.pixels[i] = d3.rgb(0, 0, 0);
            }
        }
    }

    return Revolve;
});
