import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Necromancer extends Archetypes {
  private static counter = 0;
  private ability: EnergyType = 'mana';

  constructor(name:string) {
    super(name);
    Necromancer.counter += 1;
  }

  get energyType():EnergyType {
    return this.ability;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.counter;
  }
}