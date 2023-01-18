import { Schema, UpdateQuery } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
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
    super(schema, 'motorcycle');
  }

  public async findAll(): Promise<IMotorcycle[]> {
    const motorcycles = await this.model.find({});
    return motorcycles;
  }

  public async findById(id: string): Promise<IMotorcycle | null> {
    const motorcycle = await this.model.findById(id);
    if (!motorcycle) {
      return null;
    }
    return motorcycle;
  }

  public async updateMotorcycle(id: string, obj: IMotorcycle): Promise<IMotorcycle | null> {
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...obj } as UpdateQuery<IMotorcycle>,
      { new: true },
    );
  }
}

export default MotorcycleODM;