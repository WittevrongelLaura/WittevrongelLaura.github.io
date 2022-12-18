import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChecklistService } from './checklist.service';
import { Checklist } from './entities/checklist.entity';
import { createChecklist, createChecklistInputStub } from './stubs/checklist.stub';
import { ObjectId } from 'mongodb'

describe('Checklistservice', () => {
  let service: ChecklistService
  let mockChecklistRepository: Repository<Checklist>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ChecklistService,
        {
          provide: getRepositoryToken(Checklist),
          useValue: {
            save: jest.fn().mockResolvedValue(createChecklist()),
            find: jest.fn().mockResolvedValue([createChecklist()]),
            findOne: jest.fn().mockResolvedValue(createChecklist()),
            delete: jest.fn(),
          },
        },
      ],
    }).compile()

    service = module.get<ChecklistService>(ChecklistService)
    mockChecklistRepository = module.get<Repository<Checklist>>(getRepositoryToken(Checklist))
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  describe('create', () => {
    describe('when create is called', () => {
      it('should call the repository save method', async () => {
        const saveSpy = jest.spyOn(mockChecklistRepository, 'save')
        const newChecklist = new Checklist()
        await service.create(newChecklist)
        expect(saveSpy).toBeCalledTimes(1)
      })

      it('should be called with the correct params', async () => {
        const saveSpy = jest.spyOn(mockChecklistRepository, 'save')
        //const newChecklist = new Checklist()
        const newChecklist = createChecklistInputStub() //<- function that creates a CreateInputChecklist object
        await service.create(newChecklist)
        expect(saveSpy).toBeCalledWith(newChecklist)
      })

      it('should return the created Checklist', async () => {
        const newChecklist = createChecklistInputStub()
        const toReturnChecklist = createChecklist()

        const result = await service.create(newChecklist)
        expect(result).toEqual(toReturnChecklist)
      })
    })
  })

  describe('findAll', () => {
    describe('when findAll is called', () => {
      it('should call the repository find method', async () => {
        const findSpy = jest.spyOn(mockChecklistRepository, 'find')
        await service.findAll()
        expect(findSpy).toBeCalledTimes(1)
      })

      it('should return the list of Checklists', async () => {
        const toReturnChecklist = createChecklist()
        const result = await service.findAll()
        expect(result).toEqual([toReturnChecklist])
      })
    })
  })

  describe('findOne', () => {
    describe('when findOne is called', () => {
      it('should call the repository findOne method', async () => {
        const findSpy = jest.spyOn(mockChecklistRepository, 'findOne')
        await service.findOne('63505a8efed23e73942c69bd')
        expect(findSpy).toBeCalledTimes(1)
      })

      it('should be called with the correct params', async () => {
        const findSpy = jest.spyOn(mockChecklistRepository, 'findOne')
        await service.findOne('63505a8efed23e73942c69bd')
        expect(findSpy).toBeCalledWith(new ObjectId('63505a8efed23e73942c69bd'))
      })

      it('should return a Checklist', async () => {
        const toReturnChecklist = createChecklist()
        const result = await service.findOne('63505a8efed23e73942c69bd')
        expect(result).toEqual(toReturnChecklist)
      })
    })
  })

  describe('update', () => {
    describe('when update is called', () => {
      it('should call the repository save method', async () => {
        const saveSpy = jest.spyOn(mockChecklistRepository, 'save')
        const newChecklist = createChecklist()
        await service.update(newChecklist)
        expect(saveSpy).toBeCalledTimes(1)
      })

      it('should be called with the correct params', async () => {
        const saveSpy = jest.spyOn(mockChecklistRepository, 'save')
        const newChecklist = createChecklist()
        await service.update(newChecklist)
        expect(saveSpy).toBeCalledWith(newChecklist)
      })

      it('should return the updated Checklist', async () => {
        const newChecklist = createChecklist()
        const toReturnChecklist = createChecklist()
        const result = await service.update(newChecklist)
        expect(result).toEqual(toReturnChecklist)
      })
    })
  })

  describe('remove', () => {
    describe('when remove is called', () => {
      it('should call the repository delete method', async () => {
        const deleteSpy = jest.spyOn(mockChecklistRepository, 'delete')
        const newChecklist = createChecklist()
        await service.remove(newChecklist.id)
        expect(deleteSpy).toBeCalledTimes(1)
      })
    })
  })
})
