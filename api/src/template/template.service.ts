import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { ObjectId} from 'mongodb';
import { CreateTemplateInput } from './dto/create-template.input';
import { UpdateTemplateInput } from './dto/update-template.input';
import { Template } from './entities/template.entity';


@Injectable()
export class TemplateService {
  constructor(
    @InjectRepository(Template)
    private templateRepository: Repository<Template>,
  ) {}

  create(createTemplateInput: CreateTemplateInput): Promise<Template> {
    const t = new Template();
    t.name = createTemplateInput.name;
    t.items = createTemplateInput.items;
    return this.templateRepository.save(t);
  }

  findAll(): Promise<Template[]> {
    return this.templateRepository.find();
  }

  findOne(id: string): Promise<Template> {
    return this.templateRepository.findOne(new ObjectId(id));
  }

  // async findOneByUid(uid: string): Promise<Template> {
  //     //@ts-ignore
  //   console.log(await this.templateRepository.find( ));
    
  //   //@ts-ignore
  //   return this.templateRepository.findOneBy({ uid} );
  // }

  update(updateTemplateInput: UpdateTemplateInput) {
    const update = new Template();
    update.id = new ObjectId(updateTemplateInput.id);
    update.name = updateTemplateInput.name;
    update.items = updateTemplateInput.items;
    return this.templateRepository.save(update);
  }

  remove(id: string): Promise<DeleteResult> {
    return this.templateRepository.delete(new ObjectId(id));
  }
}
