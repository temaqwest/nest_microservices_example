import { Injectable } from '@nestjs/common';

@Injectable()
export class ModuleService {
  getModule(): any {
    return { type: 'video', ip: '192.168.65.56' };
  }
}
