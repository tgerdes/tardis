define(['../art'], function(Art) {
    //// ExampleArt suitable for lots of copy pasta.

    function ExampleArt() {}
    ExampleArt.prototype = Object.create(Art.prototype);
    ExampleArt.prototype.name = "Example Art";
    ExampleArt.prototype.description = "Copy Pasta me to create new art.";

    ExampleArt.prototype.start = function start(OPC) {
        Art.prototype.start.apply(this, arguments);
        // Many art implementations can leave this alone to use the default
        // start method.
    }
    ExampleArt.prototype.initialize = function start(OPC) {
        // Initialize any art specific data here.  `this` provides storage for
        // any locals you want to persist state for.
    }
    ExampleArt.prototype.stop = function start() {
        Art.prototype.stop.apply(this, arguments);
        // Cleanup any locally allocated data here if required.
        // Many art implementations may choose to ignore this method.
    }

    ExampleArt.prototype.update = function update() {
        // The super method does nothing here so not including it as a
        // template.  This method should update the this.pixels array for a new
        // frame.
    }
    return ExampleArt;
});
