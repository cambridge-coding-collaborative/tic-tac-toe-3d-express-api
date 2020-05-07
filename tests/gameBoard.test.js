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

describe('get new game board', () => {
  it('returns a new game board', () => {
    const g = new GameBoard()
    expect(g).toBeDefined()
  })

  it('getArray returns a 4 x 4 x 4 array of blanks', () => {
    const EMPTY_CHAR = ''
    const g = new GameBoard()
    const a = g.getArray()
    const expectedArray =
      [
        // level1
        [
          [EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR],
          [EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR],
          [EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR],
          [EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR]
        ],
        // level 2
        [
          [EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR],
          [EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR],
          [EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR],
          [EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR]
        ],
        // level 3
        [
          [EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR],
          [EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR],
          [EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR],
          [EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR]
        ],
        // level 4
        [
          [EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR],
          [EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR],
          [EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR], 
          [EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR]
        ]
      ]
    console.log(a)
    console.log(expectedArray)
    expect(a).toStrictEqual(expectedArray)
  })
})
