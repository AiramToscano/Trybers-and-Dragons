import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  constructor(private player1: Fighter, private player2: Fighter) {
    super(player1);
  }

  fight(): number {
    this.player1.attack(this.player2);
    if (this.player2.lifePoints === -1) {
      return 1;
    }
    return -1;
  }
}