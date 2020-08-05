document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
//get the reference for the body
//const randomCell = () => cells[Math.floor(Math.random()*cells.length)];
let index = 6;
var board = {};
function makeBoard() {

  board.cells = [];
  for (let i = 0; i < index; i++) {
    for(let j = 0; j < index; j++) {
        let cell = {
          row: i,
          col: j,
          isMine: Math.random() >= 0.8,
          isMarked: true,
          hidden: true
        }
      board.cells.push(cell);
    }

  }
  console.log(board.cells.length);
}

// {
//   row: 0,
//   col: 0,
//   isMine: false,
//   hidden: true,
//   isMarked: true
// }

function startGame (arr) {

  makeBoard();
  document.addEventListener("click", checkForWin)
  document.addEventListener("contextmenu", checkForWin)
for (let i = 0; i < board.cells.length; i++) {
  board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
}
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
//const button = document.querySelector("button");
//button.addEventListener("click", window.reload());
//button.onclick = window.location.replace(location);

//button.addEventListener("click", window.location.reload());
  
// document.querySelector("button").onclick = function changeContent() {
//   return window.location.reload();
// }

const refreshPage = () => {
  location.reload();
}

function upGrid() {
  index++;
  
  index = index;
  startGame();
  console.log(index);
}

function downGrid() {
  index--;
}
function checkForWin () {
  var win = true
for (i = 0; i < board.cells.length; i++){
  if (board.cells[i].isMarked === true && board.cells[i].isMine === true){ 
    return
  } else if 
    (board.cells[i].isMarked === true && board.cells[i].isMine === false)
    return
  } 
    lib.displayMessage('You win!')
  }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0
 for (i = 0; i < surrounding.length; i++){
   if (surrounding[i].isMine === true) {
    count ++ 
  }}
return count
}

// function Cell( row, column, opened, flagged, mined) 
// {
// 	return {
// 		id: row + "" + column,
// 		row: row,
// 		column: column,	
// 		opened: opened,
// 		flagged: flagged,
// 		mined: mined,
// 	}
// }

// function Board( boardSize, mineCount )
// {
// 	var board = {};
// 	for( var row = 0; row < boardSize; row++ )
// 	{
// 		for( var column = 0; column < boardSize; column++ )
// 		{
// 			board[row + "" + column] = Cell( row, column, false, false, false);
// 		}
// 	}
// 	return board;
// }
// Board(5,2);
// var totalRows = 5;
// var cellsInRow = 5;
// var min = 1;
// var max = 10;

//     function drawTable() {
//         // get the reference for the body
//         var div1 = document.getElementById('div1');
 
//         // creates a <table> element
//         var tbl = document.createElement("table");
 
//         // creating rows
//         for (var r = 0; r < totalRows; r++) {
//             var row = document.createElement("tr");
	     
// 	     // create cells in row
//              for (var c = 0; c < cellsInRow; c++) {
//                 var cell = document.createElement("td");
//                 row.appendChild(cell);
//             }           
            
// 	tbl.appendChild(row); // add the row to the end of the table body
//         }
    
//      div1.appendChild(tbl); // appends <table> into <div1>
//      console.log(tbl);
// }
// window.onload=drawTable;