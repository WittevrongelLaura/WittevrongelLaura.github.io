import { Field, ID, InputType, ObjectType } from '@nestjs/graphql'
import { ObjectId } from 'mongodb'
import {
  Column,
} from 'typeorm'

@InputType('ItemInput', { isAbstract: true })
@ObjectType({ description: 'item' })
export class Item {
  // @Field(() => ID)
  // @ObjectIdColumn()
  // id: ObjectId

  @Field()
  @Column()
  name: string

  @Field({ nullable: true , defaultValue: false})
  @Column()
  // TODO: checked
  check: boolean
}
