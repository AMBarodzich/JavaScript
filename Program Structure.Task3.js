for (var y = 0, size = 8, board = ""; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
   board += "\n";
}

console.log(board);