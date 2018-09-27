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
  //var board = new Board({n:n});
  var nextMove = function(board, row) {
    if(row === n) {
      // if(!board.hasAnyRooksConflicts()) {
        debugger;
        console.log(board);
         solutionCount++;
      // }
      
    } else {

 for(var i = 0; i<n; i++) {
    //   if ((solutionCount == 1) && (i !== 0)) {
    //     i++;
    //     if (i > 2) {
    //     i--;
    //     }
    //   }

      board.togglePiece(row, i);

      // if(board.hasAnyRooksConflicts()) {
      //   board.togglePiece(row, i);
      // } else {
      //   //console.log(board);
      //   //debugger;
      //   //row++;
        nextMove(board, row+1);
      // }
    }
    }
  }
  var board = new Board({n:n});
  nextMove(board, 0);
  console.log(solutionCount);
  return solutionCount;

  //declare counter
  //declare new chessboard
  //declare variable to n
  //loop through top array
    // toggle top left spot
    //loop through next array
      // toggle next spot
      //loop through bottom array 
        //toggle next spot
        //increase counter++
  //   solutionCount = solutionCount * i;  
  
  // var solutionCount = 1; //fixme

  //console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  // return solutionCount;
  //   var solutionCount = 0;
  // //var board = new Board({n:n});
  // var nextMove = function(board, row) {
  //   if(row === 3) {
  //     solutionCount++;
  //     return;
  //   }
  //   for(var i = 0; i<3; i++) {
      
  //     if (i == 2) {
  //     var cell2 = i + 1;
  //     var cell3 = i - 1;
  //     }

  //     board.togglePiece(row, i);
  //     if(board.hasAnyRooksConflicts()) {
  //       board.togglePiece(row, i);
  //     } else {
  //       console.log(board);
  //       //debugger;
  //       row++;
  //       nextMove(board, row);
  //     }
  //   }
  // }
  // nextMove(new Board({n:3}), 0);
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
