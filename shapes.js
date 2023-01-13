var t, l, skew, square, straight
var shapes = []
function createShapes(width) {
    const twoRowsBelow = width * 2
    t = {
        0: {
            fill: [1, width, width + 1, width + 2],
            scanBelow: [twoRowsBelow, twoRowsBelow + 1, twoRowsBelow + 2],
            scanRight: [2, width + 3],
            scanLeft: [0, width - 1]
        },
        90: {
            fill: [0, width, width + 1, twoRowsBelow],
            scanBelow: [twoRowsBelow + 1, twoRowsBelow + width],
            scanRight: [1, width + 2, twoRowsBelow + 1],
            scanLeft: [-1, width - 1, twoRowsBelow - 1]
        },
        180: {
            fill: [0, 1, 2, width + 1],
            scanBelow: [width, width + 2, twoRowsBelow + 1],
            scanRight: [3, width + 2],
            scanLeft: [-1, width]
        },
        270: {
            fill: [1, width, width + 1, twoRowsBelow + 1],
            scanBelow: [twoRowsBelow, twoRowsBelow + width + 1],
            scanRight: [2, width + 2, twoRowsBelow + 2],
            scanLeft: [0, width - 1, twoRowsBelow]
        },
        color: "purple"
    }
    l = {
        0: {
            fill: [0, width, width + 1, width + 2],
            scanBelow: [twoRowsBelow, twoRowsBelow + 1, twoRowsBelow + 2],
            scanRight: [1, width + 3],
            scanLeft: [-1, width - 1]
        },
        90: {
            fill: [0, 1, width, twoRowsBelow],
            scanBelow: [width + 1, twoRowsBelow + width],
            scanRight: [2, width + 1, twoRowsBelow + 1],
            scanLeft: [-1, width - 1, twoRowsBelow - 1]
        },
        180: {
            fill: [0, 1, 2, width + 2],
            scanBelow: [width, width + 1, twoRowsBelow + 2],
            scanRight: [3, width + 3],
            scanLeft: [-1, width + 1]
        },
        270: {
            fill: [1, width + 1, twoRowsBelow, twoRowsBelow + 1],
            scanBelow: [twoRowsBelow + width, twoRowsBelow + width + 1],
            scanRight: [2, width + 2, twoRowsBelow + 2],
            scanLeft: [0, width, twoRowsBelow - 1]
        },
        color: "yellow"
    }
    skew = {
        0: {
            fill: [0, 1, width + 1, width + 2],
            scanBelow: [width, twoRowsBelow + 1, twoRowsBelow + 2],
            scanRight: [2, width + 3],
            scanLeft: [-1, width]
        },
        90: {
            fill: [1, width, width + 1, twoRowsBelow],
            scanBelow: [twoRowsBelow + 1, twoRowsBelow + width],
            scanRight: [2, width + 2, twoRowsBelow + 1],
            scanLeft: [0, width - 1, twoRowsBelow - 1]
        },
        180: {
            fill: [0, 1, width + 1, width + 2],
            scanBelow: [width, twoRowsBelow + 1, twoRowsBelow + 2],
            scanRight: [2, width + 3],
            scanLeft: [-1, width]
        },
        270: {
            fill: [1, width, width + 1, twoRowsBelow],
            scanBelow: [twoRowsBelow + 1, twoRowsBelow + width],
            scanRight: [2, width + 2, twoRowsBelow + 1],
            scanLeft: [0, width - 1, twoRowsBelow - 1]
        },
        color: "red"
    }
    square = {
        0: {
            fill: [0, 1, width, width + 1],
            scanBelow: [twoRowsBelow, twoRowsBelow + 1],
            scanRight: [2, width + 2],
            scanLeft: [-1, width - 1],
        },
        90: {
            fill: [0, 1, width, width + 1],
            scanBelow: [twoRowsBelow, twoRowsBelow + 1],
            scanRight: [2, width + 2],
            scanLeft: [-1, width - 1],
        },
        180: {
            fill: [0, 1, width, width + 1],
            scanBelow: [twoRowsBelow, twoRowsBelow + 1],
            scanRight: [2, width + 2],
            scanLeft: [-1, width - 1],
        },
        270: {
            fill: [0, 1, width, width + 1],
            scanBelow: [twoRowsBelow, twoRowsBelow + 1],
            scanRight: [2, width + 2],
            scanLeft: [-1, width - 1],
        },
        color: "green"
    }
    straight = {
        0: {
            fill: [0, 1, 2, 3],
            scanBelow: [width, width + 1, width + 2, width + 3],
            scanRight: [4],
            scanLeft: [-1]
        },
        90: {
            fill: [0, width, twoRowsBelow, twoRowsBelow + width],
            scanBelow: [twoRowsBelow + twoRowsBelow],
            scanRight: [1, width + 1, twoRowsBelow + 1, twoRowsBelow + width + 1],
            scanLeft: [-1, width - 1, twoRowsBelow - 1, twoRowsBelow + width - 1]
        },
        180: {
            fill: [0, 1, 2, 3],
            scanBelow: [width, width + 1, width + 2, width + 3],
            scanRight: [4],
            scanLeft: [-1]
        },
        270: {
            fill: [0, width, twoRowsBelow, twoRowsBelow + width],
            scanBelow: [twoRowsBelow + twoRowsBelow],
            scanRight: [1, width + 1, twoRowsBelow + 1, twoRowsBelow + width + 1],
            scanLeft: [-1, width - 1, twoRowsBelow - 1, twoRowsBelow + width - 1]
        },
        color: "orangered"
    }
    dot = {
        0: {
            fill: [0],
            scanBelow: [width],
            scanRight: [1],
            scanLeft: [-1]
        },
        90: {
            fill: [0],
            scanBelow: [width],
            scanRight: [1],
            scanLeft: [-1]
        },
        180: {
            fill: [0],
            scanBelow: [width],
            scanRight: [1],
            scanLeft: [-1]
        },
        270: {
            fill: [0],
            scanBelow: [width],
            scanRight: [1],
            scanLeft: [-1]
        },
        color: "silver"
    }
    shapes = [t, l, skew, square, straight, dot]
}


function getShape(id) {
    return shapes[id]
}


var lastShape = -1

function getRandomShapeId() {
    var rn = Math.floor(Math.random() * 6)
    while (lastShape == rn || rn == 6) {
        rn = Math.floor(Math.random() * 6)
    }
    lastShape = rn
    return rn
}