import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car = { ...this.req.body };
    try {
      const newCars = await this.service.createCar(car);
      return this.res.status(201).json(newCars);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    const cars = await this.service.findAll();
    return this.res.status(200).json(cars);
  }

  public async findById() {
    const { id } = this.req.params;
    if (!isValidObjectId(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }

    const car = await this.service.findById(id);
    if (!car) {
      return this.res.status(404).json({ message: 'Car not found' });
    } 

    this.res.status(200).json(car);
  }

  public async updateCar() {
    const { id } = this.req.params;
    const car = this.req.body;

    const { status, response } = await this.service.update(id, car);

    return this.res.status(status).json(response);
  }
}

export default CarController;