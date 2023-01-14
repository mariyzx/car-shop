import ICar from '../../src/Interfaces/ICar';

export const validCar: ICar = {
  model: 'Uno da Escada',
  year: 1960,
  color: 'Red',
  status: true,
  buyValue: 1500,
  doorsQty: 2,
  seatsQty: 2,
};

export const invalidCar: ICar = {
  model: '',
  year: 1960,
  color: 'Red',
  buyValue: 1500,
  doorsQty: 2,
  seatsQty: 2,
};

export const responseCar: ICar = {
  id: '63c2e9650051c25a51753e0c',
  model: 'Uno da Escada',
  year: 1960,
  color: 'Red',
  status: true,
  buyValue: 1500,
  doorsQty: 2,
  seatsQty: 2,
};

export const validCarWithStatusFalse: ICar = {
  ...responseCar,
  status: false,
};