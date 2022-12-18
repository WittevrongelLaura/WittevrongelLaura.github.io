import { Test, TestingModule } from '@nestjs/testing'
import {
  ClientMessage,
  MessageTypes,
} from '../bootstrap/entities/ClientMessage'
import { ChecklistResolver } from './Checklist.resolver'
import { ChecklistService } from './Checklist.service'
import { CreateChecklistInput } from './dto/create-checklist.input'
import { Checklist } from './entities/checklist.entity'
import { createChecklist, createChecklistInputStub } from './stubs/checklist.stub'

describe('ChecklistResolver', () => {
  let resolver: ChecklistResolver
  let service: ChecklistService
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ChecklistResolver,
        //ChecklistService,
        {
          provide: ChecklistService,
          useValue: {
            create: jest.fn().mockResolvedValue(createChecklist()),
            findAll: jest.fn().mockResolvedValue([createChecklist()]),
            findOne: jest.fn().mockResolvedValue(createChecklist()),
            update: jest.fn().mockResolvedValue(createChecklist()),
            remove: jest.fn().mockResolvedValue({ affected: 1 }),
          },
        },
      ],
    }).compile()

    resolver = module.get<ChecklistResolver>(ChecklistResolver)
    service = module.get<ChecklistService>(ChecklistService)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  describe('createChecklist', () => {
    let createChecklistDTO: CreateChecklistInput
    let resultChecklist: Checklist

    beforeEach(async () => {
      createChecklistDTO = createChecklistInputStub()
      resultChecklist = await resolver.createChecklist(createChecklistDTO)
    })

    describe('when createChecklist is called', () => {
      it('should call the service create method', async () => {
        expect(service.create).toBeCalledTimes(1)
      })
      it('should return the created Checklist', async () => {
        //result of the resolver is equal to the result of the mocked service
        expect(resultChecklist).toEqual(createChecklist())
      })
    })
  })

  //TODO: add tests for the other methods
  describe('findAll', () => {
    let result: Checklist[]

    // beforeEach(async () => {
    //   result = await resolver.findAll()
    // })

    describe('When this function is called.', () => {
      it('Should call Checklistervice.findAll', () => {
        expect(service.findAll).toBeCalledTimes(1)
      })

      // Remark:
      // Checklist[]
      // [Checklist]

      it('Should return some (or one) Checklist(s).', () => {
        expect(result).toEqual([createChecklist()])
      })
    })
  })

  describe('findOne', () => {
    let result: Checklist

    beforeEach(async () => {
      result = await resolver.findOne(createChecklist().id)
    })

    describe('Check service findOne implementation', () => {
      it('Should call Checklistervice correct.', () => {
        expect(service.findOne).toBeCalledTimes(1)
        expect(service.findOne).toBeCalledWith(createChecklist().id)
      })

      it('Should return the created Checklist.', () => {
        expect(result).toEqual(createChecklist())
      })
    })
  })

  describe('update', () => {
    let result: Checklist

    beforeEach(async () => {
      result = await resolver.updateChecklist(createChecklist())
    })

    describe('Check service update implementation', () => {
      it('Should call Checklistervice correct.', () => {
        expect(service.update).toBeCalledTimes(1)
        expect(service.update).toBeCalledWith(createChecklist())
      })

      it('Should return the updated Checklist.', () => {
        expect(result).toEqual(createChecklist())
      })
    })
  })

  describe('remove', () => {
    let result: ClientMessage

    beforeEach(async () => {
      result = await resolver.removeChecklist(createChecklist().id)
    })

    describe('Check the service implementation', () => {
      it('Is the remove function called correctly?', () => {
        expect(service.remove).toBeCalledTimes(1)
        expect(service.remove).toBeCalledWith(createChecklist().id)
      })
    })

    describe('Check the GraphQL return', () => {
      it('Is the message clear to the frontend?', async () => {
        const expectResult: ClientMessage = {
          type: MessageTypes.success,
          statusCode: 200,
          message: 'Checklist deleted',
        }

        expect(result).toEqual(expectResult)
      })

      it('Is the error message shown when something goes wrong?', async () => {
        jest
          .spyOn(service, 'remove')
          .mockResolvedValue({ affected: 1000, raw: '' })

        result = await resolver.removeChecklist(createChecklist().id)

        const expectResult: ClientMessage = {
          type: MessageTypes.error,
          statusCode: 400,
          message: 'Delete action went very wrong.',
        }

        expect(result).toEqual(expectResult)
      })
    })
  })
})
