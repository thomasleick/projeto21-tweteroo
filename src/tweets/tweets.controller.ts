import { Controller, Post, Body, HttpStatus, HttpCode, UnauthorizedException } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { Tweet } from './entities/tweet.entity';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity'; 

@Controller('tweets')
export class TweetsController {
  constructor(
    private readonly tweetsService: TweetsService,
    private readonly usersService: UsersService, 
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED) // status code 201
  createTweet(@Body() tweetData: any) {
    const { username, tweet } = tweetData;
    const user: User = this.usersService.getUserByUsername(username);

    if (!user) {
      throw new UnauthorizedException('User not authorized'); // Throw UnauthorizedException if user is not found
    }

    const newTweet = new Tweet(user, tweet);
    this.tweetsService.createTweet(newTweet);
  }
}