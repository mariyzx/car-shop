import { isValidObjectId } from 'mongoose';
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

  public async findAll() {
    const motorcycles = await motorcycleODM.findAll();
    return motorcycles;
  }

  public async findById(id: string) {
    const motorcycle = await motorcycleODM.findById(id);
    if (motorcycle) {
      return this.createMotocycleDomain(motorcycle);
    }
    return null;
  }

  public async updateMotorcycle(id: string, obj: IMotorcycle) {
    if (!isValidObjectId(id)) {
      return { status: 422, response: { message: 'Invalid mongo id' } };
    }

    const updatedMotorcycle = await motorcycleODM.updateMotorcycle(id, obj);

    if (!updatedMotorcycle) {
      return { status: 404, response: { message: 'Motorcycle not found' } };
    }

    return { status: 200, response: this.createMotocycleDomain(updatedMotorcycle) };
  }
}

export default MotorcycleService;