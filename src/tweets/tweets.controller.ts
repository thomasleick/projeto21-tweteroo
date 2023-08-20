import { Controller, Post, Body } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { Tweet } from './entities/tweet.entity';

@Controller('tweets')
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) {}

  @Post()
  createTweet(@Body() tweet: Tweet) {
    this.tweetsService.createTweet(tweet);
  }

}