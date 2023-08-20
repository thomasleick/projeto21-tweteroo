import { Controller, Post, Body, Get, Param, Query, Headers } from '@nestjs/common';
import { TweetsService } from './tweets.service';

@Controller('tweets')
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) {}

  @Post('sign-up')
  signUp(@Body() data: any) {
    return this.tweetsService.signUp(data);
  }

@Post()
createTweet(@Body() data: any, @Headers('user') username: string) {
  return this.tweetsService.createTweet(data, username);
}

  @Get()
  getTweets(@Query('page') page: number) {
    return this.tweetsService.getTweets(page);
  }

  @Get(':username')
  getUserTweets(@Param('username') username: string) {
    return this.tweetsService.getUserTweets(username);
  }
}