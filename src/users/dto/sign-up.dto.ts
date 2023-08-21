import { IsString, IsUrl, IsNotEmpty } from 'class-validator';

const message = 'All fields are required!'

export class SignUpDto {
  @IsNotEmpty({ message })
  @IsString({ message })
  username: string;

  @IsNotEmpty({ message })
  @IsUrl({}, { message })
  avatar: string;
}