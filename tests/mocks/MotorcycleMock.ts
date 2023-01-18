export const validMotorcycle = {
  model: 'Honda CG Titan 125',
  year: 1983,
  color: 'Red',
  status: true,
  buyValue: 1000,
  category: 'Street',
  engineCapacity: 125,
};

export const validMotorcycleWithoutStatus = {
  model: 'Honda CG Titan 125',
  year: 1983,
  color: 'Red',
  buyValue: 1000,
  category: 'Street',
  engineCapacity: 125,
};

export const responseMotorcycle = {
  id: '634852326b35b59438fbea2f',
  ...validMotorcycle,
  status: true,
};

export const responseMotorcycleWithStatusFalse = {
  id: '634852326b35b59438fbea2f',
  ...validMotorcycle,
  status: false,
};

export const allMotorcycles = [
  responseMotorcycle,
  {
    id: '634852326b35b59123fbea2f',
    model: 'Honda CG Titan 130',
    year: 1990,
    color: 'Red',
    buyValue: 1000,
    status: false,
    category: 'Street',
    engineCapacity: 125,
  },
];
