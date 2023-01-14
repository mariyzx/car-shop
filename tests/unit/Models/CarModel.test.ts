import { expect } from 'chai';
import { before } from 'mocha';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import CarODM from '../../../src/Models/CarODM';
import { invalidCar, responseCar, validCar } from '../../mocks/CarMocks';

describe('Car Model', function () {
  const car = new CarODM();
  
  describe('Fluxo normal', function () {
    describe('Criando um carro com sucesso', function () {
      before(function () {
        Sinon.stub(Model, 'create').resolves(responseCar);
      });
  
      after(function () {
        Sinon.restore();
      });
      
      it('O tipo do retorno é objeto', async function () {
        const newCar = await car.create(validCar);
        expect(newCar).to.be.an('object');
      });

      it('Deve retornar um objeto com as informações do carro', async function () {
        const newCar = await car.create(validCar);
        expect(newCar).to.be.deep.equal(responseCar);
      });
    });
  });

  describe('Fluxo de exceção', function () {
    describe('Não é possível criar um carro', function () {
      before(function () {
        Sinon.stub(Model, 'create').resolves({});
      });
  
      after(function () {
        Sinon.restore();
      });

      it('Sem o campo model', async function () {
        try {
          await car.create(invalidCar);
        } catch (error) {
          expect((error as Error).message).to.be
            .equal('car validation failed: model: Path `model` is required.');
        }
      });
    });
  });
});