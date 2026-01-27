import { Controller, Get } from "@nestjs/common";
import { AnimalsService } from "./animals.service";

@Controller("animals")
export class AnimalsContoller {
  constructor(private readonly animalsService: AnimalsService) {}

  @Get()
  findAll() {
    return this.animalsService.findAll();
  }
}
