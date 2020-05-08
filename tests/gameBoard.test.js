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

  it('verify move usling array of moves', () => {
    const gameBoard1 = new GameBoard()
    const moves =
      [ [2, 2, 0], [3, 0, 1],
        [1, 1, 1], [2, 2, 2],
        [0, 0, 1], [2, 2, 1]
      ]

    let move
    for (move of moves) {
      gameBoard1.move(move[0], move[1], move[2])
    }

    const gameBoard2 = new GameBoard()
    expect(gameBoard1.getArray()).not.toStrictEqual(gameBoard2.getArray())
    gameBoard2.moveUsingList(moves)
    expect(gameBoard1.getArray()).toStrictEqual(gameBoard2.getArray())
  })
})
