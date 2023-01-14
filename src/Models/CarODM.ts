import { Schema } from 'mongoose';
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
}

export default CarODM;