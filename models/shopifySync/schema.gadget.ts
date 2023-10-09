import type { GadgetModel } from "gadget-server";

// This metadata describes a model's schema
// View and edit your model in the Gadget editor at https://myapp.gadget.dev/edit
export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  shopifyModel: "sync",
  fields: {
    createdAt: { type: "DateTime", validations: [{ type: "required" }] },
    domain: { type: "String", validations: [{ type: "required" }] },
    errorDetails: { type: "String" },
    errorMessage: { type: "String" },
    force: { type: "Boolean", default: false },
    id: { type: "ID", validations: [{ type: "required" }, { type: "unique" }] },
    models: { type: "JSON" },
    shop: { type: "BelongsTo", validations: [{ type: "required" }], relatedModel: "shopifyShop" },
    state: { type: "RecordState", validations: [{ type: "required" }] },
    syncSince: { type: "DateTime" },
    updatedAt: { type: "DateTime", validations: [{ type: "required" }] },
  },
};