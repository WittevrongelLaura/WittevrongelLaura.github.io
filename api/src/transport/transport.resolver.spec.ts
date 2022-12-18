import { Test, TestingModule } from '@nestjs/testing'
import {
  ClientMessage,
  MessageTypes,
} from '../bootstrap/entities/ClientMessage'
import { TransportResolver } from './transport.resolver'
import { TransportService } from './transport.service'
import {
  createTransport,
  createTransportInputStub,
} from './stubs/transport.stub'
import { CreateTransportInput } from './dto/create-transport.input'
import { Transport } from './entities/transport.entity'

describe('TransportResolver', () => {
  let resolver: TransportResolver
  let service: TransportService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TransportResolver,
        {
          provide: TransportService,
          useValue: {
            create: jest.fn().mockResolvedValue(createTransport()),
            findAll: jest.fn().mockResolvedValue([createTransport()]),
            findOne: jest.fn().mockResolvedValue(createTransport()),
            update: jest.fn().mockResolvedValue(createTransport()),
            remove: jest.fn().mockResolvedValue({ affected: 1 }),
          },
        },
      ],
    }).compile()

    resolver = module.get<TransportResolver>(TransportResolver)
    service = module.get<TransportService>(TransportService)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  describe('createTransport', () => {
    let createTransportDTO: CreateTransportInput
    let resultTransport: Transport

    beforeEach(async () => {
      createTransportDTO = createTransportInputStub()
      resultTransport = await resolver.createTransport(createTransportDTO)
    })

    describe('When createTransport is called', () => {
      it('should call the service create method', () => {
        expect(service.create).toBeCalledTimes(1)
      })

      it('should return the created transport', () => {
        expect(resultTransport).toEqual(createTransport())
      })
    })
  })

  describe('findAll', () => {
    let resultTransport: Transport[]

    beforeEach(async () => {
      resultTransport = await resolver.findAll()
    })

    describe('When findAll is called', () => {
      it('should call the service findAll method', () => {
        expect(service.findAll).toBeCalledTimes(1)
      })

      it('should return the created transports', () => {
        expect(resultTransport).toEqual([createTransport()])
      })
    })
  })

  describe('findOne', () => {
    let resultTransport: Transport

    beforeEach(async () => {
      resultTransport = await resolver.findOne(createTransport().id)
    })

    describe('When findOne is called', () => {
      it('should call the service findOne method', () => {
        expect(service.findOne).toBeCalledTimes(1)
      })

      it('Should call transportService.findone with the correct params', () => {
        expect(service.findOne).toBeCalledWith(createTransport().id)
      })

      it('should return the created transport', () => {
        expect(resultTransport).toEqual(createTransport())
      })
    })
  })

  describe('update', () => {
    let resultTransport: Transport

    beforeEach(async () => {
      resultTransport = await resolver.updateTransport(createTransport())
    })

    describe('When updateTransport is called', () => {
      it('should call the service update method', () => {
        expect(service.update).toBeCalledTimes(1)
      })

      it('Should call TransportService.update with the correct params', () => {
        expect(service.update).toBeCalledWith(createTransport())
      })

      it('should return the updated Transport', () => {
        expect(resultTransport).toEqual(createTransport())
      })
    })
  })

  describe('remove', () => {
    let res: ClientMessage

    beforeEach(async () => {
      res = await resolver.removeTransport(createTransport().id)
    })

    describe('When removeTransport is called', () => {
      it('should call the service remove method', () => {
        expect(service.remove).toBeCalledTimes(1)
      })

      it('Should call TransportService.remove with the correct params', () => {
        expect(service.remove).toBeCalledWith(createTransport().id)
      })
    })

    describe('Check the GraphQl return', () => {
      it('The message should be clear to the frontend', async () => {
        const expectResult: ClientMessage = {
          type: MessageTypes.success,
          statusCode: 200,
          message: 'Transport deleted',
        }
        expect(res).toEqual(expectResult)
      })

      it('The error message should show up', async () => {
        jest
          .spyOn(service, 'remove')
          .mockResolvedValue({ affected: 5, raw: '' })

        res = await resolver.removeTransport(createTransport().id)

        const expectResult: ClientMessage = {
          type: MessageTypes.error,
          statusCode: 400,
          message: 'Delete action went very wrong.',
        }

        expect(res).toEqual(expectResult)
      })
    })
  })
})
