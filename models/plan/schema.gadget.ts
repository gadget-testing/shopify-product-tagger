import type { GadgetModel } from "gadget-server";

// This metadata describes a model's schema
// View and edit your model in the Gadget editor at https://myapp.gadget.dev/edit
export const schema: GadgetModel = {
  dbkey: "g3421",
  fields: {
    name: { type: "String", validations: [{ type: "required" }], dbkey: "g4754" },
    description: { type: "RichText", validations: [{ type: "required" }], dbkey: "f4234" },
  },
};
