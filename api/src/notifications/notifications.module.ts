import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChecklistService } from 'src/checklist/checklist.service';
import { Checklist } from 'src/checklist/entities/checklist.entity';
import { Transport } from 'src/transport/entities/transport.entity';
import { TransportService } from 'src/transport/transport.service';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { NotificationsGateway } from './notifications.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([User,Checklist, Transport])],
  providers: [NotificationsGateway,UsersService,ChecklistService, TransportService],
  exports: [NotificationsGateway],
})
export class NotificationsModule {}
