import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

const motorcycleODM = new MotorcycleODM();

class MotorcycleService {
  private createMotocycleDomain(motorcycle: IMotorcycle): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async createMotocycle(mt: IMotorcycle) {
    let obj = mt;
    if (!obj.status) {
      obj = { ...mt, status: false };
    } else {
      obj = { ...mt };
    }
    const motocycle = await motorcycleODM.create(obj);
    return this.createMotocycleDomain(motocycle);
  }
}

export default MotorcycleService;