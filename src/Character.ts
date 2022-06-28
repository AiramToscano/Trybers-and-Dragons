import Fighter from './Fighter/Fighter';
import Race from './Races/Race';
import Archetype from './Archetypes/Archetype';
import Energy from './Energy';
import getRandomInt from './utils';
import { Elf } from './Races';
import { Mage } from './Archetypes/index';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  name: string;
  constructor(name: string) {
    this.name = name;
    this._dexterity = getRandomInt(1, 10);
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._energy = { type_: this._archetype.energyType, 
      amount: getRandomInt(1, 10) };
  }

  get race(): Race { 
    return this._race; 
  }

  get archetype(): Archetype { 
    return this._archetype; 
  }

  get lifePoints(): number { 
    return this._lifePoints; 
  }

  get strength(): number { 
    return this._strength; 
  }

  get defense(): number { 
    return this._defense; 
  }

  get dexterity(): number { 
    return this._dexterity; 
  }

  get energy(): Energy { 
    const ojb = {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
    return ojb; 
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      const newlif = this._lifePoints - damage;
      this._lifePoints = newlif;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter): void {
    enemy.receiveDamage(this._strength + 10);
  }
}
