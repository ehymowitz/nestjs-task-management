import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import * as config from 'config';

const dbConfig = config.get('db');
@Module({
  imports: [
    TasksModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: dbConfig.type,
        host: process.env.RDS_HOST || dbConfig.host,
        port: process.env.RDS_PORT || dbConfig.port,
        username: process.env.RDS_USERNAME || dbConfig.username,
        password: process.env.PG_PASSWORD,
        database: process.env.RDS_DB_NAME || dbConfig.database,
        entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize,
      }),
    }),
    AuthModule,
  ],
})
export class AppModule {}
