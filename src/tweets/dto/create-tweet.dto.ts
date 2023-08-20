import { IsString } from 'class-validator';

export class CreateTweetDto {
  @IsString()
  username: string;

  @IsString()
  tweet: string;
}