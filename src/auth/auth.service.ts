import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService){}
  
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findUser(username);
    const isPasswordMatch = await bcrypt.compare(user.password, password);
    if (user && isPasswordMatch){
      return user;
    }
    return null;
  }
  
}