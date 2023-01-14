import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

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
    const carODM = new CarODM();
    const newCar = await carODM.create(obj);
    return this.createCarDomain(newCar);
  }
}

export default CarService;