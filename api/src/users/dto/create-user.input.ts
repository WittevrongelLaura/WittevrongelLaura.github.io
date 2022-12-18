import { InputType, Int, Field } from '@nestjs/graphql';
import { CreateChecklistInput } from 'src/checklist/dto/create-checklist.input';

@InputType()
export class CreateUserInput {
  @Field()
  uid: string

  @Field()
  name: string

  @Field({nullable: true, defaultValue: 'user'})
  role?: string

  @Field(()=> [CreateChecklistInput], {nullable: 'itemsAndList'}) // <--- this is the problem
  checklists?: CreateChecklistInput[]

  @Field(()=> Int, {defaultValue:0})
  checklistsCount?: number

  @Field(()=> [CreateChecklistInput], {nullable: 'itemsAndList'}) // <--- this is the problem
  boughtTemplates?: CreateChecklistInput[]
}
