(function() {
    'use strict'
    // your code will start here...
    paper.install(window);
    // Setup directly from canvas id:
    paper.setup(document.getElementById('mainCanvas'));
    view.draw();
    var c;
    for(var x=25; x<400; x+=50) {
        for(var y=25; y<400; y+=50) {
            c = new Shape.Circle(new Point(x, y), 20);
            c.fillColor = 'green';
        }
    }

    var c2 = new Shape.Circle(200, 200, 80);
    c2.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';

    var tool = new Tool();
    tool.onMouseDown = function (event) {
        var d = new Shape.Circle(event.point, 20);
        d.fillColor = "red";
    };

    console.log('main.js loaded');

    // ...and end here
}())
