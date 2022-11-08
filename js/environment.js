// utility function to convert a percentage value to a pixel value for drawing, e.g., 0.8 is 80% of the canvas height/width
function toPx(val) {
    return val * canvasLength
}

// draw the environment lines
function drawEnvironment(ctx) {
    // draw a green rectangle
    ctx.fillStyle = "green";
    ctx.fillRect(toPx(.1), toPx(.1), toPx(.4), toPx(.6));
}

