import * as graphql from "@nestjs/graphql";
import { PromptModuleService } from "./promptmodule.service";

export class PromptModuleResolver {
  constructor(protected readonly service: PromptModuleService) {}

  @graphql.Mutation(() => String)
  async CreatePromptTrigger(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.CreatePromptTrigger(args);
  }
}
