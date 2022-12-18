import { CreateTransportInput } from './create-transport.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@InputType()
export class UpdateTransportInput extends PartialType(CreateTransportInput) {
  @Field()
  id: string;

  @Field(() => [User], {nullable:'itemsAndList'})
  people: User[];
}
