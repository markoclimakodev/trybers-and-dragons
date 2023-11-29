import Race from './Race';

export default class Elf extends Race {
  readonly maxLifePoints = 99;
  private static counter = 0;

  constructor(name: string, dexterity:number) {
    super(name, dexterity); 
    Elf.counter += 1;
  }

  static createdRacesInstances() {
    return Elf.counter;
  }
}
