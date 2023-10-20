import type { GadgetModel } from "gadget-server";

// View and edit your model in the Gadget editor at https://myapp.gadget.dev/edit

export const schema: GadgetModel = {
  dbTableId: "pl-aaaa",
  fields: {
    name: { type: "String", validations: [{ type: "required" }], dbFieldId: "pl-vava", },
    description: { type: "RichText", validations: [{ type: "required" }], dbFieldId: "pl-addd" },
    shop: { type: "BelongsTo", relatedModel: "shopifyShop", dbFieldId: "pl-ewef" },
  },
};
