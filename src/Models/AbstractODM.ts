import { model, Model, models, Schema } from 'mongoose';

abstract class AbstractODM<T> {
  private schema: Schema<T>;
  protected model: Model<T>;
  private modelName: string;

  constructor(schema: Schema<T>, modelName: string) {
    this.modelName = modelName;
    this.schema = schema;
    this.model = models[this.modelName] || model(modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }
}

export default AbstractODM;