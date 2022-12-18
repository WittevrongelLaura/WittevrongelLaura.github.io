import { InputType, ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, ObjectIdColumn } from 'typeorm';
import {ObjectId} from 'mongodb'

@Entity()
@InputType('template', { isAbstract: true })
@ObjectType({description: 'template'})
export class Template {
  @Field(() => ID)
  @ObjectIdColumn()
  id: ObjectId;

  @Field()
  @Column()
  name: string;

  @Field(() => [String])
  @Column()
  items: string[];
}
