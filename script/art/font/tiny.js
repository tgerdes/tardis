// Tiny font
// Copyright (C) 2004 by Matthew Welch
// http://www.squaregear.net/fonts/tiny.shtml
// Adapted for use in JS by Thom Gerdes.
define(function(require) {
    function TinyFont() {}

    TinyFont.prototype.glyphs = {
        A:    [0,1,1,1, 1,0,1,0, 0,1,1,1,],
        B:    [1,1,1,1, 1,1,0,1, 0,1,1,0,],
        C:    [0,1,1,0, 1,0,0,1, 1,0,0,1,],
        D:    [1,1,1,1, 1,0,0,1, 0,1,1,0,],
        E:    [1,1,1,1, 1,1,0,1, 1,0,0,1,],
        F:    [1,1,1,1, 1,0,1,0, 1,0,0,0,],
        G:    [0,1,1,0, 1,0,0,1, 1,0,1,1,],
        H:    [1,1,1,1, 0,0,1,0, 1,1,1,1,],
        I:    [1,0,0,1, 1,1,1,1, 1,0,0,1,],
        J:    [0,0,1,0, 0,0,0,1, 1,1,1,0,],
        K:    [1,1,1,1, 0,0,1,0, 0,1,1,0, 1,0,0,1,],
        L:    [1,1,1,1, 0,0,0,1, 0,0,0,1,],
        M:    [1,1,1,1, 0,1,0,0, 0,0,1,0, 0,1,0,0, 1,1,1,1,],
        N:    [1,1,1,1, 0,1,0,0, 0,0,1,0, 1,1,1,1,],
        O:    [0,1,1,0, 1,0,0,1, 1,0,0,1, 0,1,1,0,],
        P:    [1,1,1,1, 1,0,1,0, 0,1,0,0,],
        Q:    [0,1,1,0, 1,0,0,1, 1,0,1,1, 0,1,1,1],             // Raised descender
        R:    [1,1,1,1, 1,0,1,0, 0,1,0,1,],
        S:    [0,1,0,1, 1,0,0,1, 1,0,1,0,],
        T:    [1,0,0,0, 1,1,1,1, 1,0,0,0,],
        U:    [1,1,1,0, 0,0,0,1, 0,0,0,1, 1,1,1,0,],
        V:    [1,1,0,0, 0,0,1,0, 0,0,0,1, 0,0,1,0, 1,1,0,0,],
        W:    [1,1,1,0, 0,0,0,1, 0,1,1,0, 0,0,0,1, 1,1,1,0,],
        X:    [1,0,1,1, 0,1,0,0, 1,0,1,1,],
        Y:    [1,0,0,0, 0,1,0,0, 0,0,1,1, 0,1,0,0, 1,0,0,0,],
        Z:    [1,0,0,1, 1,0,1,1, 1,1,0,1, 1,0,0,1],
        a:    [0,0,1,0, 0,1,0,1, 0,1,1,1,],
        b:    [1,1,1,1, 0,1,0,1, 0,0,1,0,],
        c:    [0,0,1,0, 0,1,0,1, 0,1,0,1,],
        d:    [0,0,1,0, 0,1,0,1, 1,1,1,1,],
        e:    [0,0,1,0, 0,1,1,1, 0,1,0,1,],
        f:    [0,1,1,1, 1,0,1,0,],
        g:    [1,1,0,1, 1,1,1,1,],                              // Raised descender
        h:    [1,1,1,1, 0,1,0,0, 0,0,1,1,],
        i:    [1,0,1,1,],
        j:    [0,0,0,1, 1,0,1,1],                               // Raised descender
        k:    [1,1,1,1, 0,0,1,0, 0,1,0,1,],
        l:    [1,1,1,1,],
        m:    [0,1,1,1, 0,1,0,0, 0,0,1,1, 0,1,0,0, 0,0,1,1,],
        n:    [0,1,1,1, 0,1,0,0, 0,0,1,1,],
        o:    [0,0,1,0, 0,1,0,1, 0,0,1,0,],
        p:    [1,1,1,1, 1,0,1,0, 0,1,0,0,],                     // Raised descender
        q:    [0,1,0,0, 1,0,1,0, 1,1,1,1,],                     // Raised descender
        r:    [0,1,1,1, 0,1,0,0,],
        s:    [0,0,0,1, 0,1,1,1, 0,1,0,0,],
        t:    [0,1,0,0, 1,1,1,1, 0,1,0,0,],
        u:    [0,1,1,0, 0,0,0,1, 0,1,1,1,],
        v:    [0,1,1,0, 0,0,0,1, 0,1,1,0,],
        w:    [0,1,1,0, 0,0,0,1, 0,0,1,0, 0,0,0,1, 0,1,1,0],
        x:    [0,1,0,1, 0,0,1,0, 0,1,0,1,],
        y:    [1,1,0,1, 0,1,0,1, 1,1,1,0,],                     // Raised descender
        z:    [0,1,0,1, 0,1,1,1, 0,1,0,1,],
        "0":  [0,1,1,0, 1,0,0,1, 0,1,1,0,],
        "1":  [0,1,0,1, 1,1,1,1, 0,0,0,1,],
        "2":  [1,0,1,1, 1,0,0,1, 0,1,0,1,],
        "3":  [1,0,0,1, 1,1,0,1, 0,1,1,0,],
        "4":  [0,1,1,0, 0,0,1,0, 1,1,1,1,],
        "5":  [1,1,0,1, 1,0,0,1, 1,0,1,0,],
        "6":  [0,1,1,1, 1,0,1,1, 1,0,1,1,],
        "7":  [1,0,0,1, 1,0,1,0, 1,1,0,0,],
        "8":  [0,1,1,0, 1,1,0,1, 0,1,1,0,],
        "9":  [0,1,1,0, 1,0,1,0, 1,1,1,1,],
        "!":  [1,1,0,1],
        '"':  [1,1,0,0, 0,0,0,0, 1,1,0,0],
        "#":  [0,1,0,1, 1,1,1,1, 0,1,0,1, 1,1,1,1, 0,1,0,1],    // Truncated descender
        "$":  [0,1,0,1, 1,1,1,1, 0,1,0,1, ],                    // Truncated descender
        "%":  [1,0,0,1, 0,0,1,0, 0,1,0,0, 1,0,0,1,],
        "&":  [0,0,1,0, 1,1,0,1, 1,0,0,1, 0,0,1,0,],
        "'":  [1,1,0,0,],
        "(":  [0,1,1,0, 1,0,0,1,],
        ")":  [1,0,0,1, 0,1,1,0,],
        "@":  [0,1,1,0, 1,0,0,1, 1,1,0,1,],
        "+":  [0,0,1,0, 0,1,1,1, 0,0,1,0,],
        ",":  [0,0,1,1,],                                       // Raised descender
        "-":  [0,0,1,0, 0,0,1,0, 0,0,1,0,],
        ".":  [0,0,0,1,],
        "/":  [0,0,0,1, 0,0,1,0, 0,1,0,0, 1,0,0,0],
        ":":  [0,1,0,1,],
        ";":  [1,0,1,1,],                                       // Raised descender
        "<":  [0,0,1,0, 0,1,0,1, 1,0,0,1],                      // Raised descender
        ">":  [1,0,0,1, 0,1,0,1, 0,0,1,0],                      // Raised descender
        "=":  [0,1,0,1, 0,1,0,1, 0,1,0,1],
        "?":  [1,0,0,0, 1,0,0,1, 0,1,0,0],
        "[":  [1,1,1,1, 1,0,0,1, ],
        "\\": [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1,],
        "]":  [1,0,0,1, 1,1,1,1],
        "^":  [0,1,0,0, 1,0,0,0, 0,1,0,0,],
        "_":  [0,0,0,1, 0,0,0,1, 0,0,0,1,],
        "`":  [1,0,0,0, 0,1,0,0,],
        "{":  [0,0,1,0, 1,1,1,1, 1,0,0,1],                      // Raised descender
        "|":  [1,1,1,1,],                                       // Truncated descender
        "}":  [1,0,0,1, 1,1,1,1, 0,0,1,0,],                     // Raised descender
        "~":  [0,1,0,0, 1,0,0,0, 0,1,0,0, 1,0,0,0],
    }

    TinyFont.prototype.renderString = function renderString(string) {
        var textPixels = [];
        for(var i=0; i < string.length; i++) {
            var c = this.glyphs[string[i]];
            if(c) {
                textPixels.push.apply(textPixels, c);
            }
            textPixels.push(0,0,0,0);
        }
        return textPixels;
    }

    return new TinyFont();
});
