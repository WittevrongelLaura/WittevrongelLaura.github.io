import { Module } from '@nestjs/common';
import { ChecklistService } from './checklist.service';
import { ChecklistResolver } from './checklist.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Checklist } from './entities/checklist.entity';
import { NotificationsGateway } from 'src/notifications/notifications.gateway';
import { NotificationsModule } from 'src/notifications/notifications.module';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Transport } from 'src/transport/entities/transport.entity';
import { TransportService } from 'src/transport/transport.service';

@Module({
  imports: [TypeOrmModule.forFeature([Checklist,User,Transport]), NotificationsModule],
  providers: [TransportService,UsersService, ChecklistResolver, ChecklistService],
})
export class ChecklistModule {}
