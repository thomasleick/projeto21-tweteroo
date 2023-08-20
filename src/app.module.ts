import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsModule } from './tweets/tweets.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TweetsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
