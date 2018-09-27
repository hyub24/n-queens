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
      debugger;
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
  var solution = undefined; //fixme

  //console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  //console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
