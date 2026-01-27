import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TodosModule } from "./todos/todos.module";
import { AnimalsModule } from "./animals/animals.module";

@Module({
  imports: [TodosModule, AnimalsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
