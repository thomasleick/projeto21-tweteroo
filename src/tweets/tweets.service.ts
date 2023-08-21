import { Injectable } from '@nestjs/common';
import { Tweet } from './entities/tweet.entity';

@Injectable()
export class TweetsService {
  private tweets: Tweet[] = [];

  createTweet(tweet: Tweet) {
    this.tweets.push(tweet);
  }

  getLatestTweets(page: number = 1, tweetsPerPage: number = 15): Tweet[] {
    const startIndex = (page - 1) * tweetsPerPage;
    const endIndex = startIndex + tweetsPerPage;
    return this.tweets.slice(startIndex, endIndex);
  }
}