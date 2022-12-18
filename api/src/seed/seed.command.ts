import { Command } from 'nestjs-command'
import { Injectable } from '@nestjs/common'

import { DatabaseSeedService } from './seed.service'

@Injectable()
export class DatabaseSeedCommand {
  constructor(private readonly seedService: DatabaseSeedService) {}

  @Command({
    command: 'seed:templates',
    describe: 'seed the database with templates',
  })
  async seed() {
    console.log('🌱 Start seeding')
    const r = await this.seedService.addAllTemplates()
    console.log(r)
    console.log('🌱 Seeding done 🏁')
  }

  @Command({
    command: 'seed:reset',
    describe: 'delete all data from the database',
  })
  async delete() {
    console.log('🌱 Start deleting')
    await this.seedService.deleteAllTemplates()
    console.log('🌱 Deleting done 🏁')
  }
  @Command({
    command: 'seed:test',
    describe: 'testing',
  })
  async test() {
    console.log('🌱 Start deleting')

  }
}
