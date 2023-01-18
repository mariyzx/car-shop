import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

const carODM = new CarODM();

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async createCar(car: ICar) {
    let obj = car;
    if (!obj.status) {
      obj = { ...car, status: false };
    } else {
      obj = { ...car };
    }
    const newCar = await carODM.create(obj);
    return this.createCarDomain(newCar);
  }

  public async findAll() {
    const cars = await carODM.findAll();
    return cars;
  }

  public async findById(id: string) {
    const car = await carODM.findById(id);
    if (car) {
      return this.createCarDomain(car);
    }
    return null;
  }

  public async update(id: string, obj: ICar) {
    if (!isValidObjectId(id)) {
      return { status: 422, response: { message: 'Invalid mongo id' } };
    }
    
    const updatedCar = await carODM.updateCar(id, obj);

    if (!updatedCar) {
      return { status: 404, response: { message: 'Car not found' } };
    }
    return { status: 200, response: this.createCarDomain(updatedCar) };
  }
}

export default CarService;