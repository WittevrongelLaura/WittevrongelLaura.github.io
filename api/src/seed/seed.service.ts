import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import * as jsonTemplatesSeed from './data/templates.json' //tsconfig "resolveJsonModule": true,
import { Template } from 'src/template/entities/template.entity'

@Injectable()
export class DatabaseSeedService {
  constructor(
   @InjectRepository(Template)
    private templateRepository: Repository<Template>,
  ) {}

  async addAllTemplates(): Promise<Template[]> {
    let templates: Template[] = [];
    for (let jsont of jsonTemplatesSeed) {
      const t = new Template();
      t.name = jsont.name;
      t.items = jsont.items;
      templates.push(t);
    }

    return this.templateRepository.save(templates);
  }

  async deleteAllTemplates(): Promise<void> {
    await this.templateRepository.delete({})
    return Promise.resolve()
  }
}