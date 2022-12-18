import Category from './interface.category'

export default interface Checklist {
  id?: string
  name: string
  userId: string
  sharedUserIds?: string[]
  description: string
  categories?: Category[]
  createdAt?: Date
  updatedAt?: Date
}
