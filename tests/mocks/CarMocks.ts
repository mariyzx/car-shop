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

export const validCarWithoutStatus: ICar = {
  model: 'Uno da Escada',
  year: 1960,
  color: 'Red',
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
  ...validCar,
};

export const updateInfo: ICar = {
  ...validCar,
  color: 'Green',
};

export const responseCarUpdated: ICar = {
  id: '63c2e9650051c25a51753e0c',
  ...validCar,
  color: 'Green',
};

export const validCarWithStatusFalse: ICar = {
  ...responseCar,
  status: false,
};

export const allCars = [
  responseCar,
  {
    id: '63c2e9650051c25a2658e0c',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  },
];