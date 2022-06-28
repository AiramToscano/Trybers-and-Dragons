import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  constructor(private player1: Fighter, private player2: Fighter) {
    super(player1);
  }

  fight(): number {
    while (this.player2.lifePoints > 0 && this.player1.lifePoints > 0) {
      this.player1.attack(this.player2);
      this.player2.attack(this.player1);
    }
    if (this.player1.lifePoints === -1) {
      return -1;
    }
    return 1;
  }
}