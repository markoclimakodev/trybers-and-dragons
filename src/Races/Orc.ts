import Race from './Race';

export default class Orc extends Race {
  readonly maxLifePoints = 74;
  private static counter = 0;

  constructor(name: string, dexterity:number) {
    super(name, dexterity); 
    Orc.counter += 1;
  }

  static createdRacesInstances() {
    return Orc.counter;
  }
}
