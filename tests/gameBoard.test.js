class GameBoard {
  constructor () {
    this.board = 1
  }
}

describe('get new game board', () => {
  it('returns a new game board', () => {
    const g = new GameBoard()
    expect(g).toBeDefined()
  })
})
