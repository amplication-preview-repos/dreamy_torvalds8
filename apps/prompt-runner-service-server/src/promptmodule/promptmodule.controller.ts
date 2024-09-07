import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PromptModuleService } from "./promptmodule.service";

@swagger.ApiTags("promptModules")
@common.Controller("promptModules")
export class PromptModuleController {
  constructor(protected readonly service: PromptModuleService) {}

  @common.Post("/create-prompt-trigger")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreatePromptTrigger(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreatePromptTrigger(body);
      }
}
