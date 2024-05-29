import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// @Controller is the decorator which associates classes with the required metadata.
// @Controller()
// --- specifies the route /cats : used for grouping routes (Path prefix)
@Controller('cats') 
export class AppController {
  // initializing the service
  constructor(private readonly appService: AppService) {}

  // HTTP Get method decorator
  // @Get()
  // -- specifies the endpoint as breed  : path "cats/breed"
  @Get("breed")
  getHello(): string {
    return this.appService.getHello();
  }
}
