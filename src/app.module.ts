import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from './config/config.module';
import { ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { VkmModule } from './vkm/vkm.module';
import { SyncModule } from './sync/sync.module';
import { AuthModule } from './auth/auth.module';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('database.url'),
      }),
    }),
    AuthModule,
    UsersModule,
    VkmModule,
    SyncModule,
    QuestionsModule,
  ],
})
export class AppModule {}
