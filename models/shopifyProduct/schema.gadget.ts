import type { GadgetModel } from "gadget-server";

// This metadata describes a model's schema
// View and edit your model in the Gadget editor at https://myapp.gadget.dev/edit
export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  shopifyModel: "product",
  fields: {
    body: { type: "String", shopifyField: "body_html" },
    createdAt: { type: "DateTime", validations: [{ type: "required" }] },
    handle: { type: "String", shopifyField: "handle" },
    id: { type: "ID", shopifyField: "id" },
    productCategory: { type: "JSON", shopifyField: "productCategory" },
    productType: { type: "String", shopifyField: "product_type" },
    publishedAt: { type: "DateTime", shopifyField: "published_at" },
    publishedScope: { type: "String", shopifyField: "published_scope" },
    shop: { type: "BelongsTo", relatedModel: "shopifyShop", shopifyField: "shop_id" },
    shopifyCreatedAt: { type: "DateTime", shopifyField: "created_at" },
    shopifyUpdatedAt: { type: "DateTime", shopifyField: "updated_at" },
    status: { type: "Enum", options: ["active", "archived", "draft"], shopifyField: "status" },
    tags: { type: "JSON", shopifyField: "tags" },
    templateSuffix: { type: "String", shopifyField: "template_suffix" },
    title: { type: "String", shopifyField: "title" },
    updatedAt: { type: "DateTime", validations: [{ type: "required" }] },
    vendor: { type: "String", shopifyField: "vendor" },
  },
};