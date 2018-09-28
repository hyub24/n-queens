/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var rooksBoard = new Board({n:n});
  for (var i = 0; i<n; i++) {
    rooksBoard.togglePiece(i,i);
  }
  // console.log(rooksBoard);
  var solution = rooksBoard.rows();
  //console.log(solution)
  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  if(n === 1){
    return 1;
  }
  var solutionCount = 0;
  var nextMove = function(board, row) {
    if(row === n) {
      //debugger;
      solutionCount++;
      return;
    }

    for(var i = 0; i<n; i++) {
      board.togglePiece(row, i);

      if(board.hasAnyRooksConflicts()) {
      board.togglePiece(row, i);
      } else {

      nextMove(board, row+1);
      board.togglePiece(row, i);
      }
    }
  }
  var newBoard = new Board({n:n});
  nextMove(newBoard, 0);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  //declare our solution
  //declare a counter for the number of queens
  //inside a for loop
  //use a helper function that plays the next queen
  //if after the helper function, the number of queens is equal to need
  //then we return that solution
  var solutionBoard;
  var counter = 1;
  if(n === 0) {
    return [];
  }
  if(n === 1) {
    return [[1]];
  }
  if(n === 2) {
    var two = new Board({n:n});
    return two.rows();
  }

  if(n === 3) {
    var three = new Board({n:n});
    return three.rows();
  }
  
  var nextMove = function(board, row) {
    if(counter === n) {
      return;
    }
    for(var i = 0; i<n; i++) {
      board.togglePiece(row, i);
      if(board.hasAnyQueensConflicts()) {
        board.togglePiece(row, i);
      } else {
        counter++;
        nextMove(board, row + 1);
        if(counter === n) {
          return;
        }
        board.togglePiece(row, i);
        counter--;
      }
    }
  }

  for(var j = 0; j<n; j++) {

    var newBoard = new Board({n:n});
    newBoard.togglePiece(0, j);
    nextMove(newBoard, 1);
    if(counter === n) {
      return newBoard.rows();
    }
    counter = 1;
  }

};

  // findSolution(newBoard, 0); 
  // //console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  // return solutionBoard;

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if(n === 1) {
    return 1;
  }
  var solutionCount = 0;
  // define newboard for variable 
  // build function for findSolution(board, rows)
    // if(n ===0); return solutionCount++
    //loop through for value n, 
    //toggle board
    //check for queen conflicts - > call findSolution findNQueensSolution
    //toogleboard again
  // invoke recursive funtion 
  // return solutionCount;

  var board = new Board({n: n});
  var findSolution = function(board, rows) {
    if (rows === n) {
      solutionCount++;
    } else {
      for (var i = 0; i < n; i++) {
        board.togglePiece(rows, i)
        if(!board.hasAnyQueensConflicts()){
          findSolution(board, rows + 1);
        }
        board.togglePiece(rows, i);
      } 
    }
  } 
  //debugger;
  findSolution(board, 0);
  //console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
