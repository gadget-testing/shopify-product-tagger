import type { GadgetConnections } from "gadget-server";

// This metadata describes the connections available in your application
// View and edit your connections in the Gadget editor at https://myapp.gadget.dev/edit/settings/connections
export const connections: GadgetConnections = {
  type: "gadget/connections/v1",
  connections: {
    shopify: {
      apiVersion: "2023-07",
      scopes: ["read_products", "write_products"],
      enabledModels: ["shopifyShop", "shopifyGdprRequest", "shopifyProduct"],
    },
  },
};