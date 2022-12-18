import { InputType, Int, Field } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@InputType()
export class CreateTransportInput {
  @Field()
  driver: string;

  @Field()
  checklistId: string;

  @Field(()=>Int)
  amountOfSeats: number;

  @Field(() => [User], {nullable: 'itemsAndList'})
  people: User[];
}
