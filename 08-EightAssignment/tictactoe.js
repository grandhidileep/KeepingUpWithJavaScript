let selectionCtr = 0;
let turn = "x";
let gamediv;
let boardConfiguration = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
//functions redraws the game board .
const drawgameBoard = function () {
    gamediv = document.getElementById("gameBoard");
    gamediv.innerHTML = "";
    const table = document.createElement("table");
    table.id = "table";
    for (let i = 0; i < 3; i++) {
        const divRow = drawARow("row" + i);
        table.appendChild(divRow);
    }
    gamediv.appendChild(table);
}

//this functions a row in game board ;
const drawARow = function (rowClass) {
    const divRow = document.createElement("tr");
    for (let i = 0; i < 3; i++) {
        const divCol = document.createElement("td");
        divCol.classList.add("square");
        divCol.classList.add(rowClass);
        divCol.classList.add("col" + i);
        divCol.addEventListener("click", squareClickedListerner);
        divRow.appendChild(divCol);
    }
    return divRow;
}

/**
 * when a square si clicked this functions listens to click event 
 * colors the square appropraitely .. and evalutes if there is a
 * winning situation
 */
const squareClickedListerner = function () {
    const ele = this;
    const classesList = ele.className;
    console.log(classesList);
    console.log(classesList.indexOf("x"));
    if (classesList.indexOf("X") > -1 || classesList.indexOf("O") > -1) {
        alert("This Square is taken !! Please select a different one");
    } else {
        selectionCtr++;
        let pos = fetchPosition(ele);
        if (turn == "x") {
            ele.classList.add("X")
            console.log(pos);
            boardConfiguration[parseInt(pos[0])][parseInt(pos[1])] = 1;

            turn = "o";
        } else {
            ele.classList.add("O");
            boardConfiguration[parseInt(pos[0])][parseInt(pos[1])] = -1;
            turn = "x";
        }
        if (selectionCtr == 9) {
            alert("No one wins !! No one Looses !! Lets restart if you dont mind :)")
            resetBorad();
        }
        let winner = evaluateWin();
        switch (winner) {
            case 1:
                alert("x is winner !!");
                resetBorad();
                break;
            case -1:
                alert("o is winner !!");
                resetBorad();
                break;
            default:
                break;
        }
    }
}

/**
 * this function resets board when board is completely full
 * or x or o wins
 */
const resetBorad = function () {
    boardConfiguration = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    drawgameBoard();
    turn = "x";
    selectionCtr = 0;

}

/**
 * 
 * @param {elment which has been clicked } ele 
 * this functions is used to fetch the position of
 * clicked element.
 */
const fetchPosition = function (ele) {
    let classes = ele.classList;
    let rowPos = 0;
    let colPos = 0;
    for (cl of classes) {
        if (cl.indexOf("row") > -1) {
            rowPos = cl.slice(3);
        } else if (cl.indexOf("col") > -1) {
            colPos = cl.slice(3);
        }
    }
    return [rowPos, colPos];
}

/**
 * this evaluates if there is a winning situation
 * by checking all rows , columns and diagonals
 */

const evaluateWin = function () {
    for (let i = 0; i < 3; i++) {
        if (evaluateRow(i)) {
            return boardConfiguration[i][0];
        }
        if (evaluateCol(i)) {
            return boardConfiguration[0][i];
        }
    }
    return evaluateDia();
}
/**
 * 
 * @param {Row Number} row 
 * given row number as inputs function 
 * evaluates whether all selections in 
 * that row are x s or o s
 */
const evaluateRow = (row) => {
    return (boardConfiguration[row][0] == boardConfiguration[row][1]) && (boardConfiguration[row][1] == boardConfiguration[row][2]);
}
/**
 * 
 * @param {Column Number} col 
 * given column number as inputs function 
 * evaluates whether all selections in 
 * that columns are x s or o s
 */
const evaluateCol = (col) => {
    return (boardConfiguration[0][col] == boardConfiguration[1][col]) && (boardConfiguration[1][col] == boardConfiguration[2][col]);
}
/**
 * this functions checks whether is a chance of win in both
 * diagonals
 */
const evaluateDia = function () {
    if ((boardConfiguration[0][0] == boardConfiguration[1][1]) && (boardConfiguration[2][2] == boardConfiguration[1][1])) {
        return boardConfiguration[0][0];
    } else if ((boardConfiguration[2][0] == boardConfiguration[1][1]) && (boardConfiguration[0][2] == boardConfiguration[1][1])) {
        return boardConfiguration[2][0];
    }
    return 0;
}
// listening to dom event of pageload initializg the js after page load
document.addEventListener("DOMContentLoaded", drawgameBoard);