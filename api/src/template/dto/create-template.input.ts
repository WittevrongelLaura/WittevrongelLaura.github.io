import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTemplateInput {
  @Field()
  name: string;

  @Field((type) => [String])
  items: string[];
}
