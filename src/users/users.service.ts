import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private connectedUsers: User[] = [];

  signUp(user: User) {
    this.connectedUsers.push(user);
  }

}