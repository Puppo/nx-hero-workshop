import { Module } from '@nestjs/common';
import { HeroControllerController } from './controllers/hero-controller/hero-controller.controller';

@Module({
  controllers: [HeroControllerController],
  providers: [],
  exports: [],
})
export class HeroControllersModule {}
