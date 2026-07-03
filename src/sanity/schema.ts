import { type SchemaTypeDefinition } from "sanity";
import { updateType } from "./schemas/updateType";
import { leadType } from "./schemas/leadType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [updateType, leadType],
};
