import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTweetDto {
  @IsNotEmpty({ message: 'All fields are required!' })
  @IsString()
  username: string;

  @IsNotEmpty({ message: 'All fields are required!' })
  @IsString()
  tweet: string;
}