import { Module } from "@nestjs/common";
import { PromptModuleService } from "./promptmodule.service";
import { PromptModuleController } from "./promptmodule.controller";
import { PromptModuleResolver } from "./promptmodule.resolver";

@Module({
  controllers: [PromptModuleController],
  providers: [PromptModuleService, PromptModuleResolver],
  exports: [PromptModuleService],
})
export class PromptModuleModule {}
