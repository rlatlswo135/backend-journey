import { Injectable } from "@nestjs/common";

@Injectable()
export class AnimalsService {
  findAll() {
    return "This action returns all animals";
  }
}
