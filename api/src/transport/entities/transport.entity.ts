import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, ObjectIdColumn } from 'typeorm';
import {ObjectId} from 'mongodb'
import { User } from 'src/users/entities/user.entity';

@Entity()
@ObjectType({description: 'transport'})
export class Transport {
  @Field(() => ID)
  @ObjectIdColumn()
  id: ObjectId;

  
  @Field()
  @Column()
  checklistId: string;
  
  @Field()
  @Column()
  driver: string;


  @Field()
  @Column()
  amountOfSeats: number;

  @Field(() => [User], {nullable: 'itemsAndList'})
  @Column()
  people: User[];
}
