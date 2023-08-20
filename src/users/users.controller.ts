import { Controller, Post, Body, HttpCode, HttpStatus, HttpException } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { SignUpDto } from './dto/sign-up.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

@Post('/sign-up')
  @HttpCode(HttpStatus.OK) // status code 200
  signUp(@Body() signUpDto: SignUpDto) {
    try {
      const user: User = new User(signUpDto.username, signUpDto.avatar);
      const response = this.usersService.signUp(user);
      return response;
    } catch (error) {
      throw new HttpException('Erro ao processar o registro', HttpStatus.INTERNAL_SERVER_ERROR); // status code 500
    }
  }
}