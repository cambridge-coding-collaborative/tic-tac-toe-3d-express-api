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

function testMoveAndUpdateExpected (level, x, y, gameBoard, expectedGameArray, expectedPlayerValue) {
  gameBoard.move(level, x, y)
  expectedGameArray[level][x][y] = expectedPlayerValue
  expect(gameBoard.getArray()).toStrictEqual(expectedGameArray)
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

  // eslint-disable-next-line jest/expect-expect
  it('verify 5 moves sets array correctly', () => {
    const gameBoard = new GameBoard()
    const expectedGameArray = getEmpty4x4x4Array()
    testMoveAndUpdateExpected(2, 3, 0, gameBoard, expectedGameArray, 'X')
    testMoveAndUpdateExpected(2, 1, 3, gameBoard, expectedGameArray, 'Y')
    testMoveAndUpdateExpected(3, 3, 3, gameBoard, expectedGameArray, 'X')
  })
})
