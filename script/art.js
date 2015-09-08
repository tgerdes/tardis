define(function(require) {
    ////// ART
    function Art() {}

    Art.prototype = {
        updateMilliseconds: 100, // Time to wait between updating this art.
                                 // The renderer targets 60 FPS, so there's no
                                 // need to attempt to exceed 16ms.
        start: function start(OPC) {
            // Start the art.  Starts a frame counter and initializes the
            // interval callback function.

            this.pixels = OPC.pixels;
            this.frameNumber = 0;

            this.initialize();

            this.updateInterval = setInterval(this.nextFrame.bind(this),
                                              this.updateMilliseconds);
        },

        initialize: function() {
        },

        stop: function stop() {
            // Stop the art.
            clearInterval(this.updateInterval);
        },

        nextFrame: function nextFrame() {
            // Advance the frame count and invoke the art specific update
            // method.
            this.frameNumber += 1;
            this.update.call(this);
        },

        update: function() {
        },
    }
    return Art;
});
