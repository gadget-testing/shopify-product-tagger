import type { GadgetModel } from "gadget-server";

// This metadata describes a model's schema
// View and edit your model in the Gadget editor at https://myapp.gadget.dev/edit
export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  shopifyModel: "product",
  shopifyFields: [
    "body", 
    "handle", 
    "productCategory", 
    "productType", 
    "publishedAt", 
    "publishedScope", 
    "shop", 
    "shopifyCreatedAt", 
    "shopifyUpdatedAt", 
    "status", 
    "tags", 
    "templateSuffix", 
    "title", 
    "vendor"
  ],
  fields: {
  },
};