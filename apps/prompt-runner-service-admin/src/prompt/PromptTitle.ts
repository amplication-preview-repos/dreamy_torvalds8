import { Prompt as TPrompt } from "../api/prompt/Prompt";

export const PROMPT_TITLE_FIELD = "promptText";

export const PromptTitle = (record: TPrompt): string => {
  return record.promptText?.toString() || String(record.id);
};
