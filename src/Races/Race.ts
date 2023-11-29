export default abstract class Race {
  readonly name: string;
  readonly dexterity: number;
  abstract maxLifePoints: number;
  
  constructor(name:string, dexterity:number) {
    this.name = name;
    this.dexterity = dexterity;
  }

  gettName(): string {
    return this.name;
  }

  getDexterity():number {
    return this.dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}