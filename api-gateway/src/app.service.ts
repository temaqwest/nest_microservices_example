import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_SERVICE') private userClient: ClientProxy,
    @Inject('MODULE_SERVICE') private moduleClient: ClientProxy,
  ) {}

  getUser() {
    return this.userClient.send({ cmd: 'user' }, {});
  }

  getModule() {
    return this.moduleClient.send({ cmd: 'module' }, {});
  }
}
