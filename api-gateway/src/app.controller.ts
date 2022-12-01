import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/user')
  getUser(): any {
    return this.appService.getUser();
  }

  @Get('/module')
  getModule(): any {
    return this.appService.getModule();
  }
}
