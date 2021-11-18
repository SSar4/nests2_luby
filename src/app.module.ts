/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

import { MailerModule } from '@nestjs-modules/mailer';
import { mailerConfig } from './configs/mailer.config';
import { GamesModule } from './games/games.module';
import { BetModule } from './bet/bet.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    MailerModule.forRoot(mailerConfig),
    UsersModule,
    AuthModule,
    GamesModule,
    BetModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
