class GameBoard {
  constructor () {
    this.board = 1
  }

  getArray () {
    return Array(4).fill(Array(4).fill(Array(4).fill('')))
  }
}

describe('get new game board', () => {
  it('returns a new game board', () => {
    const g = new GameBoard()
    expect(g).toBeDefined()
  })

  it('getArray returns a 4 x 4 x 4 array of blanks', () => {
    const g = new GameBoard()
    const a = g.getArray()
    expect(a[1][2][1]).toStrictEqual('')
    const rowArray = Array(4).fill('')
    const dimension2 = Array(4).fill(rowArray)
    const dimension3 = Array(4).fill(dimension2)
    expect(a).toStrictEqual(dimension3)
  })
})
