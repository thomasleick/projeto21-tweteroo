import { Controller, Post, Body, HttpStatus, HttpCode, UnauthorizedException, Get, Query, BadRequestException } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { Tweet } from './entities/tweet.entity';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity'; 
import { CreateTweetDto } from './dto/create-tweet.dto';

@Controller('tweets')
export class TweetsController {
  constructor(
    private readonly tweetsService: TweetsService,
    private readonly usersService: UsersService, 
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED) // status code 201
  createTweet(@Body() tweetData: CreateTweetDto) {
    const { username, tweet } = tweetData;
    const user: User = this.usersService.getUserByUsername(username);

    if (!user) {
      throw new UnauthorizedException('User not authorized');
    }

    const newTweet = new Tweet(user, tweet);
    this.tweetsService.createTweet(newTweet);
  }

   @Get()
  @HttpCode(HttpStatus.OK) // status code 200
  getTweets(@Query('page') page?: number) {
    if (page && (isNaN(page) || page < 1)) {
      throw new BadRequestException('Informe uma página válida!');
    }

    const tweetsPerPage = 15;
    const tweets = this.tweetsService.getLatestTweets(page, tweetsPerPage);
    return tweets;
  }
}
