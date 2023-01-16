import { Schema, UpdateQuery } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
      status: { type: Boolean, required: false },
    }, {
      versionKey: false,
      toJSON: {
        transform(_doc, ret) {
          const elt = ret;
          elt.id = ret._id;
          delete elt._id;
        },
      },
    });
    super(schema, 'car');
  }

  public async findAll(): Promise<ICar[]> {
    const cars = await this.model.find({});
    return cars;
  }

  public async findById(id: string): Promise<ICar | null> {
    const car = await this.model.findById(id);
    if (!car) {
      return null;
    }
    return car;
  }

  public async updateCar(id: string, obj: ICar): Promise<ICar | null> {
    const car = await this.model.findById(id);

    if (car) {
      return this.model.findByIdAndUpdate(
        { _id: id },
        { ...obj } as UpdateQuery<ICar>,
        { new: true },
      );
    }

    return null;
  }
}

export default CarODM;