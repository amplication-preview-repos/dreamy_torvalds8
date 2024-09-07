export type Prompt = {
  createdAt: Date;
  id: string;
  promptText: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
