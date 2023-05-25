import { GamePlayer } from './bowling_game_kata.js'

describe('Bowling Game Kata', () => {

  test('Check score of the game', () => {
     const gamePlayer = new GamePlayer(0);
     const scorePlayer = gamePlayer.scorePlayer;

     expect(scorePlayer).toBe(0);
  })

  test('Check score of the frame add to score game', () => {
    const gamePlayer = new GamePlayer(5);
    gamePlayer.roll(5);
    const scorePlayer = gamePlayer.scorePlayer;

    expect(scorePlayer).toBe(10);
  })
})