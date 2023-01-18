import { expect } from 'chai';
import { afterEach } from 'mocha';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import { allCars, invalidCar, responseCar, validCar, 
  validCarWithoutStatus, validCarWithStatusFalse } from '../../mocks/CarMocks';

describe('Car Service >', function () {
  const car = new CarService();
  describe('createCar > ', function () {
    afterEach(() => Sinon.restore());
    
    it('Criando carro com sucesso', async function () {
      Sinon.stub(Model, 'create').resolves(responseCar);
      const createdCar = await car.createCar(validCar);
      expect(createdCar).to.be.deep.equal(responseCar);
    });

    it('Criando carro sem campo status', async function () {
      Sinon.stub(Model, 'create').resolves(validCarWithStatusFalse);

      const createdCar = await car.createCar(validCarWithoutStatus);
      expect(createdCar).to.be.deep.equal(validCarWithStatusFalse);
    });

    it('Não é possível criar um carro sem um campo', async function () {
      try {
        await car.createCar(invalidCar);
      } catch (error) {
        expect((error as Error).message).to.be.equal(
          'car validation failed: model: Path `model` is required.',
        );
      }
    });
  });

  describe('findAll > ', function () {
    afterEach(() => Sinon.restore());

    it('Retorna todos os carros', async function () {
      Sinon.stub(Model, 'find').resolves(allCars);

      const cars = await car.findAll();
      expect(cars).to.be.deep.equal(allCars);
    });
  });

  describe('findById >', function () {
    afterEach(() => Sinon.restore());

    it('Retorna o carro com id especificado', async function () {
      Sinon.stub(Model, 'findById').resolves(responseCar);

      const specificCar = await car.findById('63c2e9650051c25a51753e0c');
      expect(specificCar).to.be.deep.equal(responseCar);
    });

    it('Não é possível retornar o carro com um id inválido', async function () {
      Sinon.stub(Model, 'findById').resolves(null);

      const specificCar = await car.findById('invalid');
      expect(specificCar).to.be.deep.equal(null);
    });

    it('Não é possível retornar o carro com id inexistente', async function () {
      Sinon.stub(Model, 'findById').resolves(null);

      const specificCar = await car.findById('63c2e9650111c25a51753e0c');
      expect(specificCar).to.be.deep.equal(null);
    });
  });
});