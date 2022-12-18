import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { ChecklistModule } from './checklist/checklist.module';
import { TransportModule } from './transport/transport.module';
import { TemplateModule } from './template/template.module';
import { DatabaseSeedModule } from './seed/seed.module';
import { UsersModule } from './users/users.module';
import { NotificationsModule } from './notifications/notifications.module';
import { NotificationsGateway } from './notifications/notifications.gateway';


@Module({
  imports: [
    //alle modules hierin importeren
    AuthModule,
    BootstrapModule,
    ChecklistModule,
    TransportModule,
    TemplateModule,

    //entities

    DatabaseSeedModule,

    UsersModule,

    NotificationsModule
  ],
  providers: [],
})
export class AppModule {}
