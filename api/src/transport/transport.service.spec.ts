import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ObjectId } from 'mongodb'
import { TransportService } from './transport.service'
import { Transport } from './entities/transport.entity'
import {
  createTransport,
  createTransportInputStub,
} from './stubs/transport.stub'

describe('TransportService', () => {
  let service: TransportService
  let mockTransportRepository: Repository<Transport>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TransportService,
        {
          provide: getRepositoryToken(Transport),
          useValue: {
            save: jest.fn().mockResolvedValue(createTransport()),
            find: jest.fn().mockResolvedValue([createTransport()]),
            findOne: jest.fn().mockResolvedValue(createTransport()),
            update: jest.fn().mockResolvedValue(createTransport()),
            delete: jest.fn(),
          },
        },
      ],
    }).compile()

    service = module.get<TransportService>(TransportService)
    mockTransportRepository = module.get<Repository<Transport>>(
      getRepositoryToken(Transport),
    )
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  describe('create', () => {
    describe('When create is called', () => {
      it('should create a transport', async () => {
        const transport = new Transport()
        const saveSpy = jest.spyOn(mockTransportRepository, 'save')
        await service.create(transport)
        expect(saveSpy).toBeCalledTimes(1)
      })

      it('Should be called with the correct params', async () => {
        const saveSpy = jest.spyOn(mockTransportRepository, 'save')
        const newTransport = createTransportInputStub()
        await service.create(newTransport)
        expect(saveSpy).toBeCalledWith(newTransport)
      })

      it('Should return the created transport', async () => {
        const newTransport = createTransportInputStub()
        const ToReturnTransport = createTransport()
        const result = await service.create(newTransport)
        expect(result).toEqual(ToReturnTransport)
      })
    })
  })

  describe('findAll', () => {
    describe('When findAll is called', () => {
      it('Should call the repository find method', async () => {
        const findSpy = jest.spyOn(mockTransportRepository, 'find')
        await service.findAll()
        expect(findSpy).toBeCalledTimes(1)
      })

      it('Should return an array of transports', async () => {
        const ToReturnTransport = createTransport()
        const result = await service.findAll()
        expect(result).toEqual([ToReturnTransport])
      })
    })
  })

  describe('findOne', () => {
    describe('When findOne is called', () => {
      it('Should call the repository findOne method', async () => {
        const findOneSpy = jest.spyOn(mockTransportRepository, 'findOne')
        await service.findOne('8cb8791bdee9')
        expect(findOneSpy).toBeCalledTimes(1)
      })

      it('Should be called with the correct params', async () => {
        const findSpy = jest.spyOn(mockTransportRepository, 'findOne')
        await service.findOne('8cb8791bdee9')
        expect(findSpy).toBeCalledWith(new ObjectId('8cb8791bdee9'))
      })

      it('Should return the found Transport', async () => {
        const ToReturnTransport = createTransport()
        const result = await service.findOne('8cb8791bdee9')
        expect(result).toEqual(ToReturnTransport)
      })
    })
  })

  describe('update', () => {
    describe('When update is called', () => {
      it('Should call the repository save method', async () => {
        const saveSpy = jest.spyOn(mockTransportRepository, 'save')
        const transport = createTransport()
        await service.update(transport)
        expect(saveSpy).toBeCalledTimes(1)
      })

      it('Should be called with the correct params', async () => {
        const saveSpy = jest.spyOn(mockTransportRepository, 'save')
        const newTransport = createTransport()
        await service.update(newTransport)
        expect(saveSpy).toBeCalledWith(newTransport)
      })

      it('Should return the updated Transport', async () => {
        const newTransport = createTransport()
        const ToReturnTransport = createTransport()
        const result = await service.update(newTransport)
        expect(result).toEqual(ToReturnTransport)
      })
    })
  })

  describe('remove', () => {
    describe('When remove is called', () => {
      it('Should call the repository delete method', async () => {
        const deleteSpy = jest.spyOn(mockTransportRepository, 'delete')
        const transport = createTransport()
        await service.remove(transport.id)
        expect(deleteSpy).toBeCalledTimes(1)
      })
    })
  })
})
