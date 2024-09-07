import { Injectable } from "@nestjs/common";

@Injectable()
export class PromptModuleService {
  constructor() {}
  async CreatePromptTrigger(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
