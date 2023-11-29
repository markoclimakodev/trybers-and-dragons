import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Mage extends Archetypes {
  private static counter = 0;
  private ability: EnergyType = 'mana';

  constructor(name:string) {
    super(name);
    Mage.counter += 1;
  }

  get energyType():EnergyType {
    return this.ability;
  }

  static createdArchetypeInstances(): number {
    return Mage.counter;
  }
}