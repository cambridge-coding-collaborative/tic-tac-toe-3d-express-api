import { GameBoard } from '../app/helpers/GameBoard'
const EMPTY_CHAR = ''

function getEmpty4Row () {
  return [EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR, EMPTY_CHAR]
}

function getEmpty4x4x4Array () {
  const level1 = [ getEmpty4Row(), getEmpty4Row(), getEmpty4Row(), getEmpty4Row() ]
  const level2 = [ getEmpty4Row(), getEmpty4Row(), getEmpty4Row(), getEmpty4Row() ]
  const level3 = [ getEmpty4Row(), getEmpty4Row(), getEmpty4Row(), getEmpty4Row() ]
  const level4 = [ getEmpty4Row(), getEmpty4Row(), getEmpty4Row(), getEmpty4Row() ]
  return [ level1, level2, level3, level4 ]
}

describe('get new game board', () => {
  it('returns a new game board', () => {
    const g = new GameBoard()
    expect(g).toBeDefined()
  })

  it('init getArray returns a 4 x 4 x 4 array of blanks', () => {
    const gameBoard = new GameBoard()
    const gameArray = gameBoard.getArray()
    const empty4x4x4Array = getEmpty4x4x4Array()
    expect(gameArray).toStrictEqual(empty4x4x4Array)
  })

  it('verify 5 moves sets array correctly', () => {
    const gameBoard = new GameBoard()
    const gameArray = gameBoard.getArray()
    const expectedGameArray = getEmpty4x4x4Array()
    gameBoard.move(1, 2, 3)
    expectedGameArray[1][2][3] = 'X'
    expect(gameBoard.getArray()).toStrictEqual(expectedGameArray)
  })
})
