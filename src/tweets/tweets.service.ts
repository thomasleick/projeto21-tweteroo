import { Injectable } from '@nestjs/common';
import { User } from '../users/entities/user.entity';
import { Tweet } from './entities/tweet.entity';

@Injectable()
export class TweetsService {
  private tweets: Tweet[] = [];

  createTweet(tweet: Tweet) {
    this.tweets.push(tweet);
  }

}