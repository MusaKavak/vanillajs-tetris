var countOfRows = 89
var countOfColumns = 45
var size = () => countOfColumns * countOfRows
var gameCells = []

var container
var startButton
var rowCountInput
var columnCountInput


window.onload = function () {
    setDomElements()
}


function setDomElements() {
    document.addEventListener("keydown", (k) => keys(k))
    container = document.getElementById("game-container")
    startButton = document.getElementById("start-game")
    rowCountInput = document.getElementById("row-count-input")
    columnCountInput = document.getElementById("column-count-input")

    startButton.addEventListener("click", () => {
        createGrid()
        currentShape = getShape(getRandomShapeId(), currentRotation)
        currentStartPoint = Math.floor(countOfColumns / 2)
        clearInterval(interval)
        interval = 0
        startDropping()
    })

    rowCountInput.addEventListener("focusout", (event) => {
        countOfRows = event.target.value
    })
    columnCountInput.addEventListener("focusout", (event) => {
        countOfColumns = event.target.value
    })
}


function createGrid() {
    console.log(countOfRows + '""""""""""""""""""' + countOfColumns + '"""""""""""""""' + size())
    gameCells = []
    container.innerHTML = ""
    createShapes(countOfColumns)

    container.setAttribute(
        "style",
        `--rowCount: ${countOfRows}; --columnCount: ${countOfColumns};`
    )

    for (let i = 0; i < size(); i++) {
        const cell = document.createElement("div")
        cell.setAttribute("touched", "false")
        container.appendChild(cell)
        gameCells.push(cell)
    }
}

var currentShape = {}
var currentRotation = 0
var currentStartPoint = 0
var interval = 0

function startDropping() {
    drawShape()
    interval = setInterval(() => {
        if (scan("scanBelow") == "ok") {
            drawShape(true)
            currentStartPoint += countOfColumns
            drawShape(false)

        } else {
            scanRows()
            clearInterval(interval)
            if (scanFirstRow()) {
                currentShape = getShape(getRandomShapeId(), currentRotation)
                currentStartPoint = Math.floor(countOfColumns / 2)
                startDropping()
            }
        }
    }, 200);
}

function drawShape(clear) {
    for (const cell of currentShape[currentRotation.toString()]['fill']) {
        const cellToDraw = gameCells[currentStartPoint + cell]
        if (cellToDraw != undefined) {
            if (!clear) {
                cellToDraw.style.backgroundColor = "#5051fb"
                cellToDraw.setAttribute("touched", "true")
            } else {
                cellToDraw.setAttribute("touched", "false")
                cellToDraw.style.backgroundColor = "transparent"
            }
        }
    }
}

function scan(side) {
    for (const cell of currentShape[currentRotation.toString()][side.toString()]) {
        const cellToScan = gameCells[currentStartPoint + cell]
        if (cellToScan != undefined) {
            if (cellToScan.getAttribute("touched") == "true") {
                return "fullCell"
            }
        } else {
            return "noCell"
        }
    }
    return "ok"
}

function keys(k) {
    if (k.code == "ArrowLeft" && scan("scanLeft") == "ok") {
        drawShape(true)
        currentStartPoint += -1
        drawShape(false)
    }
    if (k.code == "ArrowRight") {
        if (scan("scanRight") == "ok") {
            drawShape(true)
            currentStartPoint += 1
            drawShape(false)
        }
    }
    if (k.code == "ArrowDown") {
        if (scan("scanBelow") == "ok") {
            drawShape(true)
            currentStartPoint += countOfColumns
            drawShape(false)
        }
    }
    if (k.code == "ArrowUp") {
        drawShape(true)
        currentRotation == 270 ? currentRotation = 0 : currentRotation += 90
        drawShape()
    }
}

function scanRows() {
    for (let i = 0; i < size(); i -= -countOfColumns) {
        var isFull = true
        for (let j = i; j < i + countOfColumns; j++) {
            if (gameCells[j].getAttribute("touched") == "false") {
                isFull = false
                break
            }
        }
        if (isFull) removeFilledRow(i)
    }
}

function removeFilledRow(startPoint, endpoint = startPoint - - countOfColumns) {
    const newRow = []
    for (let i = startPoint; i < endpoint; i++) {
        const cell = document.createElement("div")
        cell.setAttribute("touched", "false")
        if (i == startPoint) { container.insertAdjacentElement("afterbegin", cell) } else {
            newRow[newRow.length - 1].insertAdjacentElement("afterend", cell)
        }
        newRow.push(cell)
        gameCells[i].remove()
    }
    gameCells.splice(startPoint, countOfColumns)
    gameCells = newRow.concat(gameCells)
}

function scanFirstRow() {
    for (let i = 0; i < countOfColumns; i -= -1) {
        if (gameCells[i].getAttribute("touched") == "true") {
            gameOver()
            return false
        }
    }
    return true

}
function gameOver() {
    console.log("Game Over")
}