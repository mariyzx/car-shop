import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import { invalidCar, responseCar, validCar, validCarWithStatusFalse } from '../../mocks/CarMocks';

describe('Car Service', function () {
  const car = new CarService();
  describe('Fluxo normal', function () {
    describe('Criando um carro com sucesso com todas as proprieades', function () {
      before(function () {
        Sinon.stub(Model, 'create').resolves(responseCar);
      });
  
      it('O tipo do retorno é objeto', async function () {
        const newCar = await car.createCar(validCar);
        expect(newCar).to.be.an('object');
      });

      it('Deve retornar um objeto com as informações do carro', async function () {
        const result = await car.createCar(validCar);

        expect(result).to.be.deep.equal(responseCar);
      });

      after(function () {
        Sinon.restore();
      });
    });

    describe('Criando um carro com sucesso sem o campo status', function () {
      it(
        'Se tentar criar um carro sem o campo status, o mesmo é retornado como false', 
        async function () {
          Sinon.stub(Model, 'create').resolves(validCarWithStatusFalse);

          const result = await car.createCar(validCar);

          expect(result).to.be.deep.equal(validCarWithStatusFalse);
        },
      );

      after(function () {
        Sinon.restore();
      });
    });
  });

  describe('Fluxo de exceção', function () {
    before(function () {
      Sinon.stub(Model, 'create').resolves({});
    });

    after(function () {
      Sinon.restore();
    });

    it('Sem o campo model', async function () {
      try {
        await car.createCar(invalidCar);
      } catch (error) {
        expect((error as Error).message).to.be
          .equal('car validation failed: model: Path `model` is required.');
      }
    });
  });
});