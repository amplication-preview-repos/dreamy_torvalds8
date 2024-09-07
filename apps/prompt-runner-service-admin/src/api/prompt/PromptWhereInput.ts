import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PromptWhereInput = {
  id?: StringFilter;
  promptText?: StringNullableFilter;
  status?: "Option1";
};
