import { Controller, Get } from '@nestjs/common';
import { ModuleService } from './module.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class ModuleController {
  constructor(private readonly moduleService: ModuleService) {}

  @MessagePattern({ cmd: 'module' })
  getModule(): string {
    return this.moduleService.getModule();
  }
}
