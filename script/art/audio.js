
define(['../art', 'd3', ], function(Art, d3) {

return Art.newArt({

    name: "Audio",
    description: "Frequency analyzer for audio input.",
    initialize: function initialize() {
        navigator.getUserMedia = navigator.getUserMedia ||
                                 navigator.webkitGetUserMedia ||
                                 navigator.mozGetUserMedia;


        var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        var analyser = this.analyser = audioCtx.createAnalyser();
        analyser.minDecibels = -90;
        analyser.maxDecibels = -10;
        analyser.smoothingTimeConstant = 0.20;
        analyser.fftSize = 64;
        var that = this;
        var fallback = function() {
            var myAudio = document.querySelector('audio');
            myAudio.play();
            var source = audioCtx.createMediaElementSource(myAudio);
            source.connect(analyser);
        }
        if (navigator.getUserMedia) {
           navigator.getUserMedia({ audio: true, video: false },
              function(stream) {
                  that.stream = stream;
                  that.source = audioCtx.createMediaStreamSource(stream);
                  that.source.connect(analyser);
              },
              function(err) {
                 console.log("The following error occured: " + err.name);
                 fallback();
              }
           );
        } else {
           console.log("getUserMedia not supported");
           fallback();
        }



        analyser.connect(audioCtx.destination);
        this.rows = [
            d3.scale.linear().domain([192,255]).range([0,0.5]).clamp(true),
            d3.scale.linear().domain([128,191]).range([0,0.5]).clamp(true),
            d3.scale.linear().domain([64,127]).range([0,0.5]).clamp(true),
            d3.scale.linear().domain([0,63]).range([0,0.5]).clamp(true),
        ]
        this.hue = d3.scale.linear().domain([0,255]).range([120,0]);
    },
    update: function update() {
        var bufferLength = this.analyser.frequencyBinCount;
        var dataArray = new Uint8Array(bufferLength);
        this.analyser.getByteFrequencyData(dataArray);
        for(var x=0; x<24; x++) {
            v = dataArray[x]
            for (y=0; y < 4; y++) {
                var i = x*4 + y;
                this.pixels[i] = d3.hsl(this.hue(v), 1.0, this.rows[y](v));
            }
        }
    },
});

})
