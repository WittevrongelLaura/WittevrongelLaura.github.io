import { Field, ID, ObjectType } from '@nestjs/graphql'
import { ObjectId } from 'mongodb'
import { Category } from './category.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm'
// import { Item } from './item.entity'

@Entity()
@ObjectType({ description: 'checklist' })
export class Checklist {
  @Field(() => ID) // GraphQL
  @ObjectIdColumn() //typeORM // Map this field to the (generated) _id column in the database
  id: ObjectId

  @Field() // GraphQL
  @Column() // typeORM
  name: string

  @Field()
  @Column()
  userId:string
  
  @Field(()=>[String],{nullable:true})
  @Column({ type:'simple-array'})
  sharedUserIds?:string[]
  
  // @Field(() => [Category]) // GraphQL
  // categories: Category[]

  // @Column({type:'array', nullable:true}) // typeORM
  // categoryIds?: string[]

  @Field(()=> [Category]) // GraphQL
  @Column({ type: 'simple-json' })
  categories: Category[]

  @Field({ nullable: true })
  @Column()
  description?: string

  @Field({ nullable: true })
  @CreateDateColumn({ type: 'timestamp', nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt?: Date
}
