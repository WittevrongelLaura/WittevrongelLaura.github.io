import { Injectable } from '@nestjs/common';
import { Parent, ResolveField } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId } from 'mongodb'
import { DeleteResult, Repository } from 'typeorm'

import { CreateChecklistInput } from './dto/create-checklist.input';
import { UpdateChecklistIds, UpdateChecklistInput } from './dto/update-checklist.input';
import { Checklist } from './entities/checklist.entity';

@Injectable()
export class ChecklistService {
  constructor(
    @InjectRepository(Checklist)
    private readonly checklistRepository: Repository<Checklist>,
  ) {}



  create(createChecklistInput: CreateChecklistInput): Promise<Checklist> {
    const c = new Checklist()
    c.name = createChecklistInput.name
    // c.items = createChecklistInput.items
    c.userId = createChecklistInput.userId
    c.sharedUserIds = createChecklistInput.sharedUserIds
    c.description = createChecklistInput.description
    c.categories = createChecklistInput.categories
    return this.checklistRepository.save(c)

  }

  // findCategoryByChecklist(id: string) {
  //   return this.checklistRepository.findOne({
  //     where: { id },
  //   })
  //   // return this.locationRepository.findOneBy({ idUser })
  // }
  findAllBySharedUserIds(uid:string): Promise<Checklist[]> {
    // find all by sharedUserIds
    return this.checklistRepository.find().then((checklists) => {
      let list = []
      for (const checklist of checklists) {
          if (checklist.sharedUserIds.includes(uid)) {
            list.push(checklist)
          }
        
      }
      return list
    })

  }

  findAllByUserId(uid:string): Promise<Checklist[]> {
    const checklists= this.checklistRepository.findBy({ userId: uid })
    return checklists
  }

  findAll(): Promise<Checklist[]> {
    return this.checklistRepository.find()
  }
  
  
  findOne(id: string): Promise<Checklist> {
    return this.checklistRepository.findOne(new ObjectId(id))
  }

  async findByUser(userId: string): Promise<Checklist[]> {
    const checklists = await this.checklistRepository.find()
    const checklistsFound = []
    for(let checklist of checklists){
      if(checklist.sharedUserIds.includes(userId)){
        checklistsFound.push(checklist)
      }
    }
    const checklistsOwned = await this.checklistRepository.findBy({ userId })
    for(let checklist of checklistsOwned){
      if(!checklistsFound.includes(checklist)){
        checklistsFound.push(checklist)
      }
    }
    return checklistsFound
  }

  updateSharedUserIds(updateChecklistIds: UpdateChecklistIds) {
    const update = new Checklist()
    update.id = new ObjectId(updateChecklistIds.id)
    update.sharedUserIds = updateChecklistIds.sharedUserIds
    return this.checklistRepository.save(update)
  }

  async updateUsersChecklist(checklistId: string, userIds: string[]){
    console.log(userIds)
    const update = await this.checklistRepository.findOne(new ObjectId(checklistId))
    for(let userId of userIds){
      update.sharedUserIds.push(userId)
    }
    // update.sharedUserIds = [...update.sharedUserIds, userIds]
    return this.checklistRepository.save(update)
  }

  update(updateChecklistInput: UpdateChecklistInput) {
    const update = new Checklist()
    update.id = new ObjectId(updateChecklistInput.id)
    update.name = updateChecklistInput.name
    update.description = updateChecklistInput.description
    update.categories = updateChecklistInput.categories
    return this.checklistRepository.save(update) // Save gives us an advantage!
  }

  remove(id: string): Promise<DeleteResult> {
    return this.checklistRepository.delete(new ObjectId(id))
  }

  
  }

