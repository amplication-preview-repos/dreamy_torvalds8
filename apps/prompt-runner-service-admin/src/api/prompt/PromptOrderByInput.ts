import { SortOrder } from "../../util/SortOrder";

export type PromptOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  promptText?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
