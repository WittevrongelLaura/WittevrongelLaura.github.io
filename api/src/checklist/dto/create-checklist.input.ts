import { InputType, Field } from '@nestjs/graphql'
import { Category } from '../entities/category.entity'

@InputType()
export class CreateChecklistInput {

  @Field()
  name: string
  
  @Field()
  userId: string

  @Field(() => [String])
  sharedUserIds: string[]
  
  @Field({ nullable: true })
  description?: string
  
  @Field((type) => [Category])
  categories: Category[]
}