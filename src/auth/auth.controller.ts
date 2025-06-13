import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthLoginRequestDto, AuthRegisterRequestDto } from './auth';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) { }

  @Post('login')
  async login(
    @Body() body: AuthLoginRequestDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.authService.login(body, res)
  }

  @Post('register')
  async register(
    @Body() body: AuthRegisterRequestDto
  ) {
    return await this.authService.register(body)
  }
}
