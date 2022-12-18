
import { Field, PartialType, InputType } from '@nestjs/graphql'
import { CreateChecklistInput } from './create-checklist.input'

@InputType()
export class UpdateChecklistInput extends PartialType(CreateChecklistInput) {
  @Field()
  id: string
}


@InputType()
export class UpdateChecklistIds extends PartialType(CreateChecklistInput) {
  @Field()
  id: string

  @Field(() => [String])
  sharedUserIds: string[]
}

@InputType()
export class RemoveTransportIds extends PartialType(CreateChecklistInput) {
  @Field()
  id: string

  @Field()
  checklistId: string
}
