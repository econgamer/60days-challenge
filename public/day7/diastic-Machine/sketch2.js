var textfield;
var button;
var output;

function setup() {
    noCanvas();
    textfield = select("#textfield");
    button = select("#button");
    output = select("#output");
    button.mousePressed(countText);
}

function countText() {
    var s = textfield.value();
    var o = 0;
    for (var i = 0; i < s.length; i++) {
        var index = s.indexOf("rainbow", i);
        console.log(index);
        if (index > o) {
            createP(index);
     o = index;
        }
    }
}
