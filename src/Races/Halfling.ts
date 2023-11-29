import Race from './Race';

export default class Halfling extends Race {
  readonly maxLifePoints = 60;
  private static counter = 0;

  constructor(name: string, dexterity:number) {
    super(name, dexterity); 
    Halfling.counter += 1;
  }

  static createdRacesInstances() {
    return Halfling.counter;
  }
}
