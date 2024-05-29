import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

// @Controller is the decorator which associates classes with the required metadata.
// @Controller()
// --- specifies the route /cats : used for grouping routes (Path prefix)
@Controller('cats') 
export class AppController {
  // initializing the service
  constructor(private readonly appService: AppService) {}

  // HTTP Get method decorator
  // @Get()
  // --- specifies the endpoint as breed  : path "cats/breed"
  @Get("breed")
  findAll(): string {
    return "This method will return all cats's breed"
  }

  // --- Using Express Request Object with in the application
  @Get("/:name")
  findCats(@Req() request : Request): string {
    return request.params.name;
  }
}
