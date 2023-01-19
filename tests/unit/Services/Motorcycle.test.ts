import { expect } from 'chai';
import { afterEach } from 'mocha';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { allMotorcycles, motorcycleUpdate, responseMotorcycle, 
  responseMotorcycleWithStatusFalse, validMotorcycle, 
  validMotorcycleUpdated, 
  validMotorcycleWithoutStatus } from '../../mocks/MotorcycleMock';

describe('Motorcycle Service > ', function () {
  const motorcycle = new MotorcycleService();
  describe('createMotorcycle >', function () {
    afterEach(() => Sinon.restore());

    it('Criando uma motocicleta com sucesso', async function () {
      Sinon.stub(Model, 'create').resolves(responseMotorcycle);

      const moto = await motorcycle.createMotocycle(validMotorcycle);
      expect(moto).to.be.deep.equal(responseMotorcycle);
    });

    it('Criando uma motocicleta sem o campo status', async function () {
      Sinon.stub(Model, 'create').resolves(responseMotorcycleWithStatusFalse);

      const moto = await motorcycle.createMotocycle(validMotorcycleWithoutStatus);
      expect(moto).to.be.deep.equal(responseMotorcycleWithStatusFalse);
    });
  });

  describe('findAll > ', function () {
    it('Retorna todas as motocicletas', async function () {
      Sinon.stub(Model, 'find').resolves(allMotorcycles);

      const moto = await motorcycle.findAll();
      expect(moto).to.be.deep.equal(allMotorcycles);
    });
  });

  describe('findById > ', function () {
    afterEach(() => Sinon.restore());

    it('Retorna a moto com o id especificado', async function () {
      Sinon.stub(Model, 'findById').resolves(responseMotorcycle);

      const moto = await motorcycle.findById('634852326b35b59438fbea2f');
      expect(moto).to.be.deep.equal(responseMotorcycle);
    });

    it('Não é possível retornar uma moto com um id inválido', async function () {
      Sinon.stub(Model, 'findById').resolves(null);

      const moto = await motorcycle.findById('invalid');
      expect(moto).to.be.deep.equal(null);
    });

    it('Não é possível retornar uma moto com um id inexistente', async function () {
      Sinon.stub(Model, 'findById').resolves(null);

      const moto = await motorcycle.findById('634852326b35b59438fbea2e');
      expect(moto).to.be.deep.equal(null);
    });
  });

  describe('updateMotorcycle >', function () {
    afterEach(() => Sinon.restore());

    it('Atualizando uma moto com sucesso', async function () {
      Sinon.stub(Model, 'findByIdAndUpdate').resolves(validMotorcycleUpdated);

      const motorcycleUpdated = await motorcycle
        .updateMotorcycle('634852326b35b59438fbea2f', motorcycleUpdate);
      expect(motorcycleUpdated.response).to.be.deep.equal(validMotorcycleUpdated);
    });

    it('Não é possível atualizar uma moto com um id inválido', async function () {
      Sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

      try {
        await motorcycle.updateMotorcycle('invalid', motorcycleUpdate);
      } catch (error) {
        expect((error as Error).message).to.be.deep.equal('Invalid mongo id');
      }
    });

    it('Não é possível atualizar uma moto com um id inexistente', async function () {
      Sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

      try {
        await motorcycle
          .updateMotorcycle('634852326b35b59438fbea3v', motorcycleUpdate);
      } catch (error) {
        expect((error as Error).message).to.be.deep.equal('Invalid mongo id');
      }
    });
  });
});