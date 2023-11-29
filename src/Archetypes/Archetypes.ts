import { EnergyType } from '../Energy';

export default abstract class Archetypes {
  readonly name: string;
  readonly special: number;
  readonly cost:number;

  constructor(name:string) {
    this.name = name;
    this.special = 0;
    this.cost = 0;
  }

  get getName(): string {
    return this.name;
  }

  get getSpecial(): number {
    return this.special;
  }

  get getCost(): number {
    return this.cost;
  }

  static createdArchetypeInstances():number {
    throw new Error('Not implemented');
  }

  abstract get energyType():EnergyType;
}