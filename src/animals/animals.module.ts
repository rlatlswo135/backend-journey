import { Module } from "@nestjs/common";
import { AnimalsContoller } from "./animals.controller";
import { AnimalsService } from "./animals.service";

@Module({
  controllers: [AnimalsContoller],
  providers: [AnimalsService],
})
export class AnimalsModule {}
