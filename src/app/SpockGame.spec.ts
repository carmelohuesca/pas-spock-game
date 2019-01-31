import { SpockGame } from './SpockGame';
describe('SpockGame:', () => {
  let game;
  const PLAYERONE = 'Sheldon';
  const PLAYERTWO = 'Penny';
  const ROCK = SpockGame.CHOICE.ROCK;
  const PAPER = SpockGame.CHOICE.PAPER;
  const SCISSORS = SpockGame.CHOICE.SCISSORS;
  const LIZARD = SpockGame.CHOICE.LIZARD;
  const SPOCK = SpockGame.CHOICE.SPOCK;
  const DRAW = SpockGame.RESULTS.DRAW;
  const PLAYERONEWINS = SpockGame.RESULTS.PLAYERONEWINS;
  const PLAYERTWOWINS = SpockGame.RESULTS.PLAYERTWOWINS;

  beforeEach(() => {
    game = new SpockGame(PLAYERONE, PLAYERTWO);
  });
  describe('Especificaciones del juego SpockGame:', () => {
    it('el juego se inicia con dos jugadores', () => {
      expect(game).toBeDefined();
      expect(game.playerOne).toBe(PLAYERONE);
      expect(game.playerTwo).toBe(PLAYERTWO);
      expect(game.rounds).toBe(0);
    });
    it('el juego tiene cinco opciones iniciales (piedra, papel, tijera, lagarto, spock)', () => {
      expect(ROCK).toBe('ROCK');
      expect(PAPER).toBe('PAPER');
      expect(SCISSORS).toBe('SCISSORS');
      expect(LIZARD).toBe('LIZARD');
      expect(SPOCK).toBe('SPOCK');
    });
    it('el juego tiene tres resultados (empate, ganador 1, ganador 2)', () => {
      expect(DRAW).toBe('empate');
      expect(PLAYERONEWINS).toBe('ha ganado el jugador 1');
      expect(PLAYERTWOWINS).toBe('ha ganado el jugador 2');
    });
    it('se incrementa el número de ronda en cada de tirada', () => {
      expect(game.rounds).toBe(0);
      expect(game.round(ROCK, ROCK)).toBe(DRAW);
      expect(game.rounds).toBe(1);
    });
  });

  describe('Empatan cuando:', () => {
    it('los dos jugadores eligen la misma opción', () => {
      expect(game.round(ROCK, ROCK)).toBe(DRAW);
      expect(game.round(PAPER, PAPER)).toBe(DRAW);
      expect(game.round(SCISSORS, SCISSORS)).toBe(DRAW);
      expect(game.round(LIZARD, LIZARD)).toBe(DRAW);
      expect(game.round(SPOCK, SPOCK)).toBe(DRAW);
    });
  });

  describe('Gana el jugador 1 cuando:', () => {
    it('el jugador 1 elige "piedra" y el jugador 2 elige "tijeras"', () => {
      expect(game.round(ROCK, SCISSORS)).toBe(PLAYERONEWINS);
    });
    it('el jugador 1 elige "papel" y el jugador 2 elige "piedra"', () => {
      expect(game.round(PAPER, ROCK)).toBe(PLAYERONEWINS);
    });
    it('el jugador 1 elige "tijeras" y el jugador 2 elige "papel"', () => {
      expect(game.round(SCISSORS, PAPER)).toBe(PLAYERONEWINS);
    });
    it('el jugador 1 elige "piedra" y el jugador 2 elige "lagarto"', () => {
      expect(game.round(ROCK, LIZARD)).toBe(PLAYERONEWINS);
    });
    it('el jugador 1 elige "papel" y el jugador 2 elige "spock"', () => {
      expect(game.round(PAPER, SPOCK)).toBe(PLAYERONEWINS);
    });
    it('el jugador 1 elige "tijeras" y el jugador 2 elige "lagarto"', () => {
      expect(game.round(SCISSORS, LIZARD)).toBe(PLAYERONEWINS);
    });
    it('el jugador 1 elige "lagarto" y el jugador 2 elige "spock"', () => {
      expect(game.round(LIZARD, SPOCK)).toBe(PLAYERONEWINS);
    });
    it('el jugador 1 elige "lagarto" y el jugador 2 elige "papel"', () => {
      expect(game.round(LIZARD, PAPER)).toBe(PLAYERONEWINS);
    });
    it('el jugador 1 elige "spock" y el jugador 2 elige "piedra"', () => {
      expect(game.round(SPOCK, ROCK)).toBe(PLAYERONEWINS);
    });
    it('el jugador 1 elige "spock" y el jugador 2 elige "tijeras"', () => {
      expect(game.round(SPOCK, SCISSORS)).toBe(PLAYERONEWINS);
    });
  });

  describe('Gana el jugador 2 cuando:', () => {
    it('el jugador 1 elige "piedra" y el jugador 2 elige "papel"', () => {
      expect(game.round(ROCK, PAPER)).toBe(PLAYERTWOWINS);
    });
    it('el jugador 1 elige "papel" y el jugador 2 elige "tijeras"', () => {
      expect(game.round(PAPER, SCISSORS)).toBe(PLAYERTWOWINS);
    });
    it('el jugador 1 elige "tijeras" y el jugador 2 elige "piedra"', () => {
      expect(game.round(SCISSORS, ROCK)).toBe(PLAYERTWOWINS);
    });
    it('el jugador 1 elige "piedra" y el jugador 2 elige "spock"', () => {
      expect(game.round(ROCK, SPOCK)).toBe(PLAYERTWOWINS);
    });
    it('el jugador 1 elige "papel" y el jugador 2 elige "lagarto"', () => {
      expect(game.round(PAPER, LIZARD)).toBe(PLAYERTWOWINS);
    });
    it('el jugador 1 elige "tijeras" y el jugador 2 elige "spock"', () => {
      expect(game.round(SCISSORS, SPOCK)).toBe(PLAYERTWOWINS);
    });
    it('el jugador 1 elige "lagarto" y el jugador 2 elige "piedra"', () => {
      expect(game.round(LIZARD, ROCK)).toBe(PLAYERTWOWINS);
    });
    it('el jugador 1 elige "lagarto" y el jugador 2 elige "tijeras"', () => {
      expect(game.round(LIZARD, SCISSORS)).toBe(PLAYERTWOWINS);
    });
    it('el jugador 1 elige "spock" y el jugador 2 elige "papel"', () => {
      expect(game.round(SPOCK, PAPER)).toBe(PLAYERTWOWINS);
    });
    it('el jugador 1 elige "spock" y el jugador 2 elige "lagarto"', () => {
      expect(game.round(SPOCK, LIZARD)).toBe(PLAYERTWOWINS);
    });
  });

});
