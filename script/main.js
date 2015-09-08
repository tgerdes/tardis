require.config({
    paths: {
        d3: "https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min",
        jquery: "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min",
        select2: "https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/js/select2",
    },
    waitSeconds: 40
});

define(function(require) {
    function buildPixelPos() {
        var paneHeight = 87;
        var paneWidth = 82;
        var paneSep = 33;
        var border = 2;
        var winWidth = (paneWidth - 4 * border) / 3;
        var winHeight = (paneHeight - 3 * border) / 2;

        var pixelPos = new Array(96);
         
        for(var i=0;i<pixelPos.length;i++) {

            var pane = Math.floor(i / 12);
            var x = Math.floor(i / 4) % 3;
            var y = i % 4;

            pixelPos[i] = [
                pane * (paneWidth + paneSep) + x * winWidth + border * (x+1),
                y*winHeight/2 + (1+ Math.floor(y / 2)) * border,
                winWidth,
                Math.ceil(winHeight / 2)
            ];
        }
        return pixelPos;
    }

    //// Initialize and start the art.
    var Renderer = require('./renderer');
    var c = document.getElementById("myCanvas");
    var pixelPos = buildPixelPos();
    var OPC = new Renderer(c, pixelPos);

    require('select2');
    var $ = require('jquery');
    var art = require('./art/all');
    var currentArt = art[0];
    $(document).ready(function() {
        function formatOption(option) {
            var $opt = $(
                '<span>' + option.text + ': ' + option.description + '</span>'
            );
            return $opt;
        }

        var data = [];

        $("select.art").select2({
            templateResult: formatOption,
            data: art,
        })
        .on("select2:select", function(e) {
            currentArt.value.stop();
            currentArt = e.params.data;
            currentArt.value.start(OPC);
        });
    });
    currentArt.value.start(OPC);
});
