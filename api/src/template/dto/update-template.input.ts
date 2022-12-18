import { CreateTemplateInput } from './create-template.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTemplateInput extends PartialType(CreateTemplateInput) {
  @Field()
  id!: string;
}
