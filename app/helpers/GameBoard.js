const EMPTY_CHAR = ''

class GameBoard {
  constructor () {
    this.board = 1
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

  getArray () {
    return GameBoard.getDimensionValues(3)
  }
}
export { GameBoard }
