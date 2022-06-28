import Battle from './Battle';
import Fighter from '../Fighter';
import SimpleFighter from '../Fighter/SimpleFighter';

export default class PVE extends Battle {
  constructor(
    private player1: Fighter,
    private players: Fighter[] | SimpleFighter[],
  ) {
    super(player1);
  }

  fight(): number {
    this.players.forEach((e) => {
      e.attack(this.player1);
    });
    if (this.player1.lifePoints === -1) {
      return -1;
    }
    return 1;
  }
}