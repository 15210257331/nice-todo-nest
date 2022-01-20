import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsGateway } from '../socket/events.gateway';
import { Task } from '../../common/entity/task.entity';
import { CronService } from './cron.service';
import { EmailModule } from "../email/email.module"
import { SocketModule } from '../socket/socket.module';

@Module({
    providers: [CronService,],
    imports: [
        TypeOrmModule.forFeature([Task]),
        ScheduleModule.forRoot(),
        EmailModule,
        SocketModule
    ],
    controllers: [],
})
export class CronModule { }
