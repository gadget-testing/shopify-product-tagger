import type { GadgetModel } from "gadget-server";

// This metadata describes a model's schema
// View and edit your model in the Gadget editor at https://myapp.gadget.dev/edit
export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  fields: {
    name: { type: "String", validations: [{ type: "required" }] },
    description: { type: "RichText", validations: [{ type: "required" }] },
  },
};