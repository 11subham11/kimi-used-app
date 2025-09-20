import { Controller, Get, Query } from '@nestjs/common';
import { AppService, KimiResponse } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('kimi')
  async getKimiResponse(
    @Query('text') text?: string,
    @Query('imageUrl') imageUrl?: string,
  ): Promise<KimiResponse> {
    return this.appService.getKimiResponse(
      text || 'What is in this image?',
      imageUrl || 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg',
    );
  }
}
