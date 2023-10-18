import type { GadgetModel } from "gadget-server";

// This metadata describes a model's schema
// View and edit your model in the Gadget editor at https://myapp.gadget.dev/edit
export const schema: GadgetModel = {
  dbKey: "g4553",
  fields: {
    name: { type: "String", validations: [{ type: "required" }], dbKey: "j4513" },
    description: { type: "RichText", validations: [{ type: "required" }], dbKey: "g5263" },
    shop: { type: "BelongsTo", relatedModel: "shopifyShop", dbKey: "h4563" },
  },
};
