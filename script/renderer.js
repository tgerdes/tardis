define(['d3', 'jquery'], function(d3, $) {
    var Renderer = function(element, pixelPos) {
        this.element = element;
        this.ctx = element.getContext("2d");
        this.pixelPos = pixelPos;

        this.pixels = new Array(pixelPos.length);
        for(var i=0; i < pixelPos.length; i++) {
            this.pixels[i] = d3.rgb(0, 0, 0);
        }

        this.drawInterval = setInterval(this.draw.bind(this), 16);

        var socket = this.socket = new WebSocket("ws://localhost:7890");
        socket.onmessage = function (event) {
              console.log(event.data);
        }
        $(window).on('beforeunload', function(){
            socket.close();
        }).bind();
    }

    Renderer.arts = [];

    Renderer.prototype.draw = function() {
        this.ctx.clearRect(0, 0, this.element.width, this.element.height);
        var opc_buf = new Uint8Array(4 + this.pixels.length);

        for(i=0; i < this.pixels.length; i++) {
            this.ctx.fillStyle = this.pixels[i].toString();
            this.ctx.fillRect.apply(this.ctx, this.pixelPos[i]);
            var pix = d3.rgb(this.pixels[i]);
            opc_buf[4+0+i] = pix.r;
            opc_buf[4+1+i] = pix.g;
            opc_buf[4+2+i] = pix.b;
        }

        if (this.socket.readyState == WebSocket.OPEN) {
            this.socket.send(opc_buf.buffer);
        }
    }
    return Renderer;
});
