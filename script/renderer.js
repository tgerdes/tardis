define(function(require) {
    var Renderer = function(element, pixelPos) {
        this.element = element;
        this.ctx = element.getContext("2d");
        this.pixelPos = pixelPos;

        this.pixels = new Array(pixelPos.length);
        for(var i=0; i < pixelPos.length; i++) {
            this.pixels[i] = d3.rgb(0, 0, 0);
        }

        this.drawInterval = setInterval(this.draw.bind(this), 16);
    }

    Renderer.arts = [];

    Renderer.prototype.draw = function() {
        this.ctx.clearRect(0, 0, this.element.width, this.element.height);

        for(i=0; i< 96; i++) {
            this.ctx.fillStyle = this.pixels[i].toString();
            this.ctx.fillRect.apply(this.ctx, this.pixelPos[i]);
        }
    }
    return Renderer;
});
