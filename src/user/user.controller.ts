import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/user')
export class UserController {
  constructor(
    private userService: UserService,
  ) { }
  @Get()
  async getUser() {
    return await this.userService.getUser()
  }

  @Get('random-user')
  async getRandomUser(
    @Query('results') results: string,
    @Query('page') page: string,
  ) {
    return await this.userService.getRandomUser({
      page: page,
      results: results
    })
  }
}
