const EMPTY_CHAR = ''

class GameBoard {
  constructor () {
    this.board = 1
    this.gameBoardArray = GameBoard.getDimensionValues(3)
    this.playerValue = 'X'
  }

  static getDimensionValues (dimension) {
    if (dimension === 0) {
      return EMPTY_CHAR
    } else {
      let array = []
      let x
      for (x in [0, 1, 2, 3]) {
        array[x] = GameBoard.getDimensionValues(dimension - 1)
      }
      return array
    }
  }

  move (level, x, y) {
    this.gameBoardArray[level][x][y] = this.playerValue
    this.playerValue = this.playerValue === 'X' ? 'Y' : 'X'
  }

  moveUsingList (movesArray) {
    let move
    for (move of movesArray) {
      this.move(move[0], move[1], move[2])
    }
  }

  getArray () {
    return this.gameBoardArray
  }
}
export { GameBoard }
