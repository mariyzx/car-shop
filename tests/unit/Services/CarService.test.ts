import { expect } from 'chai';
import { afterEach } from 'mocha';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import {
  allCars,
  invalidCar,
  responseCar,
  responseCarUpdated,
  updateInfo,
  validCar, 
  validCarWithoutStatus,
  validCarWithStatusFalse,
} from '../../mocks/CarMocks';

describe('Car Service >', function () {
  afterEach(() => sinon.restore());

  const car = new CarService();

  describe('createCar > ', function () {
    afterEach(() => sinon.restore());
    
    it('Criando carro com sucesso', async function () {
      sinon.stub(Model, 'create').resolves(responseCar);
      const createdCar = await car.createCar(validCar);
      expect(createdCar).to.be.deep.equal(responseCar);
    });

    it('Criando carro sem campo status', async function () {
      sinon.stub(Model, 'create').resolves(validCarWithStatusFalse);

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
    it('Retorna todos os carros', async function () {
      sinon.stub(Model, 'find').resolves(allCars);

      const cars = await car.findAll();
      expect(cars).to.be.deep.equal(allCars);
    });
  });

  describe('findById >', function () {
    afterEach(() => sinon.restore());

    it('Retorna o carro com id especificado', async function () {
      sinon.stub(Model, 'findById').resolves(responseCar);

      const specificCar = await car.findById('63c2e9650051c25a51753e0c');
      expect(specificCar).to.be.deep.equal(responseCar);
    });

    it('Não é possível retornar o carro com um id inválido', async function () {
      sinon.stub(Model, 'findById').resolves(null);

      const specificCar = await car.findById('invalid');
      expect(specificCar).to.be.deep.equal(null);
    });

    it('Não é possível retornar o carro com id inexistente', async function () {
      sinon.stub(Model, 'findById').resolves(null);

      const specificCar = await car.findById('63c2e9650111c25a51753e0c');
      expect(specificCar).to.be.deep.equal(null);
    });
  });

  describe('update > ', function () {
    it('Atualizando um carro com sucesso', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(responseCarUpdated);

      const updatedCar = await car.update('63c2e9650051c25a51753e0c', updateInfo);
      expect(updatedCar.response).to.be.deep.equal(responseCarUpdated);
    });

    it('Não é possível atualizar um carro com id inválido', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

      try {
        await car.update('invalid', updateInfo);
      } catch (error) {
        expect((error as Error).message).to.be.deep.equal('Invalid mongo id');
      }
    });

    it('Não é possível atualizar um carro com um id inexistente', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

      try {
        await car.update('invalid', updateInfo);
      } catch (error) {
        expect((error as Error).message).to.be.deep.equal('Car not found!');
      }
    });
  });
});