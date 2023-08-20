import { Injectable } from '@nestjs/common';

@Injectable()
export class TweetsService {
  private connectedUsers = [];
  private tweets = [];

  signUp(data: any) {
    // Implement your logic here
  }

  createTweet(data: any, username: string) {
    // Implement your logic here
  }

  getTweets(page: number) {
    // Implement your logic here
  }

  getUserTweets(username: string) {
    // Implement your logic here
  }
}