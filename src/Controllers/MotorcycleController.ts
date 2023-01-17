import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/Motocycle';

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
}

export default MotorcycleController;