define(['../art', 'd3'], function(Art, d3) {
    //// Chase suitable for lots of copy pasta.

    function Chase() {}
    Chase.prototype = Object.create(Art.prototype);
    Chase.prototype.name = "Chase";
    Chase.prototype.description = "Knightrider style LED chaser";

    Chase.prototype.update = function update() {
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
    }

    return Chase;
});
