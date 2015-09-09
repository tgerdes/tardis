
define(['../art', 'd3', ], function(Art, d3) {

return Art.newArt({
    
    name: "Audio",
    description: "Frequency analyzer for audio input.",
    initialize: function initialize() {

        var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        var analyser = this.analyser = audioCtx.createAnalyser();
        analyser.minDecibels = -90;
        analyser.maxDecibels = -10;
        analyser.smoothingTimeConstant = 0.20;
        analyser.fftSize = 64;

        var myAudio = document.querySelector('audio');

        // Create a MediaElementAudioSourceNode
        // Feed the HTMLMediaElement into it
        var source = audioCtx.createMediaElementSource(myAudio);

        myAudio.play();

        source.connect(analyser);
        analyser.connect(audioCtx.destination);
        this.rows = [
            d3.scale.linear().domain([192,255]).range([0,0.5]).clamp(true),
            d3.scale.linear().domain([128,191]).range([0,0.5]).clamp(true),
            d3.scale.linear().domain([64,127]).range([0,0.5]).clamp(true),
            d3.scale.linear().domain([0,63]).range([0,0.5]).clamp(true),
        ]
        this.hue = d3.scale.linear().domain([0,255]).range([360,0]);
    },
    update: function update() {
        var bufferLength = this.analyser.frequencyBinCount;
        var dataArray = new Uint8Array(bufferLength);
        this.analyser.getByteFrequencyData(dataArray);
        for(var x=0; x<24; x++) {
            for (y=0; y < 4; y++) {
                var i = x*4 + y;
                this.pixels[i] = d3.hsl(this.hue(dataArray[x]), 0.5, this.rows[y](dataArray[x]));
            }
        }
    },
});

})
