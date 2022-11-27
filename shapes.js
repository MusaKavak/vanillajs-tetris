const t = [[false, true, false, false], [true, true, true, false]]
const l = [[false, false, true, false], [true, true, true, false]]
const skew = [[true, true, false, false], [false, true, true, false]]
const square = [[false, true, true, false], [false, true, true, false]]
const straight = [[false, false, false, false], [true, true, true, true]]

const shapes = [t, l, skew, square, straight]

var lastShape = -1
function getShape() {
    var rn = Math.floor(Math.random() * 5)
    while (lastShape == rn) {
        rn = Math.floor(Math.random() * 5)
    }
    lastShape = rn
    return shapes[rn]
}