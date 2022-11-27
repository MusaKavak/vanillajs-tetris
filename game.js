const countOfRows = 20
const countOfColumns = 10
var gameCells = []

window.onload = function () {
    createGameBoard()
    newShape()
    setInterval(() => {
        nextLine()
    }, 500)
}

function createGameBoard() {
    const container = document.getElementById("game-container")
    container.addEventListener("click", () => newShape())
    container.setAttribute(
        'style',
        `--rowCount: ${countOfRows}; --columnCount: ${countOfColumns};`)

    for (let i = 0; i < countOfRows; i++) {
        const newRow = document.createElement("div")
        const newRowArray = []

        for (let j = 0; j < countOfColumns; j++) {
            const newCell = document.createElement("div")
            newCell.setAttribute("color", "normal")
            newRow.appendChild(newCell)
            newRowArray.push(newCell)
        }

        container.appendChild(newRow)
        gameCells.push(newRowArray)
    }
}

function getField(startRow, startColumn, isVertical) {
    const field = []

    const addRow = isVertical ? 3 : 1
    const addColumn = isVertical ? 1 : 3

    for (let i = startRow; i <= startRow + addRow; i++) {
        const row = []
        for (let j = startColumn; j <= startColumn + addColumn; j++) {
            if (gameCells[i] != undefined && gameCells[i][j] != undefined) {
                row.push(gameCells[i][j])
            }
        }
        field.push(row)
    }
    return field
}

function dyeCells(clear) {
    const field = getField(currentRow, currentCollumn, isVertical)
    field.forEach((row, i) => {
        row.forEach((cell, j) => {
            if (shape[i][j] && !clear) {
                cell.setAttribute("color", "red")
            } else {
                cell.setAttribute("color", "normal")
            }
        })
    })
}

var shape = []
var currentRow = -1
var currentCollumn = -1
var isVertical = false
function newShape() {
    shape = getShape()
    currentRow = 0
    currentCollumn = 3
    isVertical = false
    dyeCells()
}

function nextLine() {
    if (scanNextRow(currentRow + 2)) {
        dyeCells(true)
        currentRow++
        dyeCells()
    } else {
        newShape()
    }
}

function scanNextRow(newRow) {
    const field = getField(newRow, currentCollumn, isVertical)
    console.log(field[0])
    if (field[0].length > 0) {
        for (const cell of field[0]) {
            const color = cell.getAttribute("color")
            if (color != "normal") { console.log("false"); return false }
        }
        console.log("true")
        return true
    } else { return false }
}