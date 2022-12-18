import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TemplateService } from './template.service';
import { Template } from './entities/template.entity';
import { CreateTemplateInput } from './dto/create-template.input';
import { UpdateTemplateInput } from './dto/update-template.input';
import { ClientMessage, MessageTypes } from 'src/bootstrap/entities/ClientMessage';

@Resolver(() => Template)
export class TemplateResolver {
  constructor(private readonly templateService: TemplateService) {}

  @Mutation(() => Template)
  createTemplate(@Args('createTemplateInput') createTemplateInput: CreateTemplateInput) {
    return this.templateService.create(createTemplateInput);
  }

  @Query(() => [Template], { name: 'templates' })
  findAll(): Promise<Template[]> {
    return this.templateService.findAll();
  }

  @Query(() => Template, { name: 'template' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Template> {
    return this.templateService.findOne(id);
  }

  // @Query(() => Template)
  // findOneByUid(@Args('uid', { type: () => String }) uid: string) {
  //   return this.templateService.findOneByUid(uid);
  // }

  @Mutation(() => Template)
  updateTemplate(@Args('updateTemplateInput') updateTemplateInput: UpdateTemplateInput): Promise<Template> {
    return this.templateService.update(updateTemplateInput);
  }

  @Mutation(() => ClientMessage)
  async removeTemplate(@Args('id', { type: () => String }) id: string): Promise<ClientMessage> {
    const deleted = await this.templateService.remove(id);
    if (deleted.affected= 1)
      return {type: MessageTypes.success, message: 'Template deleted', statusCode: 200};
    
    return {type: MessageTypes.error, message: 'Delete action went very wrong.', statusCode: 400};
  }
}
