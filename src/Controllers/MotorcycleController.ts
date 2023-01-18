import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import MotorcycleService from '../Services/Motorcycle';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motocycle = { ...this.req.body };
    try {
      const newMotocycle = await this.service.createMotocycle(motocycle);
      return this.res.status(201).json(newMotocycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    const motorcycles = await this.service.findAll();
    return this.res.status(200).json(motorcycles);
  }

  public async findById() {
    const { id } = this.req.params;
    if (!isValidObjectId(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }

    const motorcycle = await this.service.findById(id);

    if (!motorcycle) {
      return this.res.status(404).json({ message: 'Motorcycle not found' });
    } 

    this.res.status(200).json(motorcycle);
  }
}

export default MotorcycleController;