import { Field, ID, InputType, ObjectType } from '@nestjs/graphql'
import { Item} from './item.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm'

@InputType('CategoryInput', { isAbstract: true })
@ObjectType({ description: 'category' })
export class Category {

  @Field()
  @Column()
  name: string

  @Field((type) => [Item] )
  @Column({ type: 'simple-json' })
  list: Item[]
}
