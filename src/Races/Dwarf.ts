import Race from './Race';

export default class Dwarf extends Race {
  readonly maxLifePoints = 80;
  private static counter = 0;

  constructor(name: string, dexterity:number) {
    super(name, dexterity); 
    Dwarf.counter += 1;
  }

  static createdRacesInstances() {
    return Dwarf.counter;
  }
}
