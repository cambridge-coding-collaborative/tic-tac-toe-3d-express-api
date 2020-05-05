class GameBoard {
  constructor () {
    this.board = 1
  }

  getArray () {
    return ['']
  }
}

describe('get new game board', () => {
  it('returns a new game board', () => {
    const g = new GameBoard()
    expect(g).toBeDefined()
  })

  it('getArray returns an array', () => {
    const g = new GameBoard()
    const a = g.getArray()
    expect(a[0]).toStrictEqual('')
  })
})
