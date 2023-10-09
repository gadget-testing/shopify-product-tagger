import type { GadgetModel } from "gadget-server";

// This metadata describes a model's schema
// View and edit your model in the Gadget editor at https://myapp.gadget.dev/edit
export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  shopifyModel: "gdprrequest",
  fields: {
    createdAt: { type: "DateTime", validations: [{ type: "required" }] },
    id: { type: "ID", validations: [{ type: "required" }, { type: "unique" }] },
    payload: { type: "JSON" },
    shop: { type: "BelongsTo", validations: [{ type: "required" }], relatedModel: "shopifyShop" },
    topic: {
      type: "Enum",
      validations: [{ type: "required" }],
      options: ["customers/data_request", "customers/redact", "shop/redact"],
    },
    updatedAt: { type: "DateTime", validations: [{ type: "required" }] },
  },
};