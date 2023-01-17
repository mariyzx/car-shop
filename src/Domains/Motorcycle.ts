import IMotorcycle from '../Interfaces/IMotorcycle';

class Motorcycle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;
  private category: string;
  private engineCapacity: number; 

  constructor(motocycle: IMotorcycle) {
    this.id = motocycle.id;
    this.model = motocycle.model;
    this.year = motocycle.year;
    this.color = motocycle.color;
    this.status = motocycle.status;
    this.buyValue = motocycle.buyValue;
    this.category = motocycle.category;
    this.engineCapacity = motocycle.engineCapacity;
  }
}

export default Motorcycle;