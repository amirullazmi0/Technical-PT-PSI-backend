import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthLoginRequestDto, AuthLoginResponse, AuthRegisterRequestDto, AuthRegisterResponse, authUserData, AuthUserInterface } from './auth';
import { WebResponse } from 'src/dto/Response';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService
  ) { }
  async login(body: AuthLoginRequestDto, res: Response): Promise<WebResponse<AuthLoginResponse>> {
    const user = authUserData.find((user) => user.username === body.username)
    if (!user) {
      throw new BadRequestException('username not found')
    }

    const isPasswordMatch = await bcrypt.compare(body.password, user.password)

    if (!isPasswordMatch) {
      throw new BadRequestException('password not match')
    }

    const token = await this.jwtService.sign({
      id: user.id,
      username: user.username
    }, {
      expiresIn: '1d'
    })

    const expireDate = new Date(Date.now() + 1000 * 60 * 60 * 24);
    res.cookie('access-token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      expires: expireDate
    })

    console.log('auth : access-token', this.jwtService.verify(token));

    return {
      success: true,
      message: 'login success',
      data: {
        token: this.jwtService.sign(body.username)
      }
    }
  }

  async register(body: AuthRegisterRequestDto): Promise<WebResponse<AuthRegisterResponse>> {

    const usernameIsUnique = authUserData.find((user) => user.username === body.username)
    if (usernameIsUnique) {
      throw new BadRequestException('username already exists')
    }

    const bcryptPassword = await bcrypt.hash(body.password, 10);

    const user: AuthUserInterface = {
      id: uuidv4(),
      fullName: body.fullName,
      username: body.username,
      password: bcryptPassword
    }

    authUserData.push(user)

    return {
      success: true,
      message: 'register success',
      data: {
        id: user.id,
        fullName: user.fullName,
        username: user.username,
      }
    }
  }
}
