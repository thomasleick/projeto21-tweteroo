import { Injectable } from '@nestjs/common';
import { Tweet } from './entities/tweet.entity';

@Injectable()
export class TweetsService {
  private tweets: Tweet[] = [];

  createTweet(tweet: Tweet) {
    this.tweets.push(tweet);
  }

  getLatestTweets(page: number = 1, tweetsPerPage: number = 15): any[] {
    const startIndex = (page - 1) * tweetsPerPage;
    const endIndex = startIndex + tweetsPerPage;

    const tweets = this.tweets.slice(startIndex, endIndex);

    return tweets.map(tweet => ({
      username: tweet.user.username,
      avatar: tweet.user.avatar,
      tweet: tweet.tweet,
    }));
  }

  getTweetsByUsername(username: string): any[] {
  const userTweets = this.tweets.filter(tweet => tweet.user.username === username);
  return userTweets.map(tweet => ({
    username: tweet.user.username,
    avatar: tweet.user.avatar,
    tweet: tweet.tweet,
  }));
}
}