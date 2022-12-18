import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Template } from 'src/template/entities/template.entity';
import { CreateTemplateInput } from 'src/template/dto/create-template.input';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field()
  uid: string;

  // @Field()
  // role: string;

  @Field(() => [Template], { nullable: "itemsAndList" })
  templates: Template[];
}
