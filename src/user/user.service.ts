import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDTO } from './dtos/create-user.dto';
import bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<UserDocument>) {}
    
    async addUser(createUserDTO: CreateUserDTO): Promise<User> {
      const pass = await this.hashPassword(createUserDTO.password);
      
      const newUser = await this.userModel.create({password: pass, ...createUserDTO});
      
      //newUser.password = await bcrypt.hash(newUser.password, 10);
      return newUser.save();
    }
    
    public async hashPassword(password) {
        const hash = await bcrypt.hash(password, 10);
        return hash;
    }
    
    async findUser(username: string): Promise<User | undefined> {
      const user = await this.userModel.findOne({username});
      return user;
    }
}
