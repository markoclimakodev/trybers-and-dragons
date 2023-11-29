import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Ranger extends Archetypes {
  private static counter = 0;
  private ability: EnergyType = 'stamina';

  constructor(name:string) {
    super(name);
    Ranger.counter += 1;
  }

  get energyType():EnergyType {
    return this.ability;
  }

  static createdArchetypeInstances(): number {
    return Ranger.counter;
  }
}