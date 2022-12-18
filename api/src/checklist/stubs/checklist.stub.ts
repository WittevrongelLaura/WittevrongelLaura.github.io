import { CreateChecklistInput } from '../dto/create-checklist.input'
import { Checklist } from '../entities/checklist.entity'
import { ObjectId } from 'mongodb'
import { Category } from '../entities/category.entity'

export const createChecklistInputStub = (): CreateChecklistInput => {
  const c = new CreateChecklistInput()
  c.name = 'name'
  c.description = 'description'
  c.categories = [{
    name: 'name',
    list: [{
      name: 'name',
      check: true
    }]
  }]
  return c
}

export const createChecklist = (): Checklist => {
  const c = new Checklist()
  c.id = new ObjectId('63505a8efed23e73942c69bd')
  c.name = 'name'
  c.categories = [{
    name: 'name',
    list: [{
      name: 'name',
      check: true
    }]
  }]
  c.description = 'description'
  return c
}
