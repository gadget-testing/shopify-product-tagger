import type { GadgetModel } from "gadget-server";

// This metadata describes a model's schema
// View and edit your model in the Gadget editor at https://myapp.gadget.dev/edit
export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  fields: {
    createdAt: { type: "DateTime", validations: [{ type: "required" }] },
    id: { type: "ID", validations: [{ type: "required" }, { type: "unique" }] },
    tag: { type: "String", validations: [{ type: "required" }] },
    updatedAt: { type: "DateTime", validations: [{ type: "required" }] },
  },
};