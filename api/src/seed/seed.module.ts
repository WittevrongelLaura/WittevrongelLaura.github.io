import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CommandModule } from 'nestjs-command' //https://www.npmjs.com/package/nestjs-command

import { DatabaseSeedService } from './seed.service'
import { DatabaseSeedCommand } from './seed.command'
import { Template } from '../template/entities/template.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Template]), CommandModule], //<---import CommandModule
  providers: [DatabaseSeedCommand, DatabaseSeedService],
})
export class DatabaseSeedModule {}
