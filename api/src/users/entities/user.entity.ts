import { ObjectType, Field, Int, ID, ArgsType, InputType } from '@nestjs/graphql';
import { Checklist } from 'src/checklist/entities/checklist.entity';
import { Template } from 'src/template/entities/template.entity';
import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from 'typeorm';

@Entity()
@InputType('userInput', { isAbstract: true })
@ObjectType({ description: 'user' })
export class User {
  @Field(() => ID)
  @ObjectIdColumn()
  id: ObjectID

  @Field()
  @Column()
  name: string

  @Field()
  @Column()
  uid: string

  @Field()
  @Column({ default: 'user'})
  role?: string

  @Field(() => [Template], { nullable: "itemsAndList" })
  @Column({nullable: true})
  templates?: Template[]

  @Field({ nullable: true })
  @CreateDateColumn({ type: 'timestamp', nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt?: Date
}
