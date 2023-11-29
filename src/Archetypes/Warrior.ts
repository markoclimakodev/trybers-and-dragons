import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Warrior extends Archetypes {
  private static counter = 0;
  private ability: EnergyType = 'stamina';

  constructor(name:string) {
    super(name);
    Warrior.counter += 1;
  }

  get energyType():EnergyType {
    return this.ability;
  }

  static createdArchetypeInstances(): number {
    return Warrior.counter;
  }
}