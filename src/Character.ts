import Archetypes, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter/Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetypes;
  private maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;
  constructor(name:string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this.dexterity);
    this._archetype = new Mage(name);
    this.maxLifePoints = this.race.maxLifePoints;
    this._lifePoints = this.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { type_: this.archetype.energyType, amount: getRandomInt(1, 10) };
  }

  get name():string {
    return this._name;
  }

  get race():Race {
    return this._race;
  }

  get archetype():Archetypes {
    return this._archetype;
  }

  get lifePoints():number {
    return this._lifePoints;
  }

  get strength():number {
    return this._strength;
  }

  get defense():number {
    return this._defense;
  }

  get dexterity():number {
    return this._dexterity;
  }

  get energy():Energy {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    this._lifePoints -= (damage > 0) ? damage : 1;

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  levelUp(): void {
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    
    const newMaxLife = this.maxLifePoints + getRandomInt(1, 10);
    this.maxLifePoints = newMaxLife > this.race.maxLifePoints
      ? this.race.maxLifePoints
      : newMaxLife;
    
    this._energy.amount = 10;
    this._lifePoints = this.maxLifePoints;
  }

  special(enemy: Fighter): void {
    enemy.receiveDamage(this.strength * 2);
  }
}