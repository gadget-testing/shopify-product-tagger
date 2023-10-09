import type { GadgetAccessControl } from "gadget-server";

// This metadata describes the roles available in your application
// View and edit your roles and permissions in the Gadget editor at https://myapp.gadget.dev/edit/settings/permissions
export const accessControl: GadgetAccessControl = {
  type: "gadget/access-control/v1",
  roles: { unauthenticated: {}, "shopify-app-users": {} },
  models: {
    shopifyShop: {
      read: { "shopify-app-users": { filter: "models/shopifyShop/shopifyShop.gelly" } },
      update: { "shopify-app-users": true },
      install: { "shopify-app-users": true },
      uninstall: { "shopify-app-users": true },
      reinstall: { "shopify-app-users": true },
    },
    shopifyGdprRequest: {
      read: { "shopify-app-users": { filter: "models/shopifyGdprRequest/shopifyGdprRequest.gelly" } },
      create: { "shopify-app-users": true },
      update: { "shopify-app-users": true },
    },
    shopifyProduct: {
      read: { "shopify-app-users": { filter: "models/shopifyProduct/shopifyProduct.gelly" } },
      create: { "shopify-app-users": true },
      update: { "shopify-app-users": true },
      delete: { "shopify-app-users": true },
    },
    shopifySync: {
      read: { "shopify-app-users": { filter: "models/shopifySync/shopifySync.gelly" } },
      run: { "shopify-app-users": true },
      complete: { "shopify-app-users": true },
      error: { "shopify-app-users": true },
    },
    session: { read: {} },
    allowedTag: { read: {}, create: {}, update: {}, delete: {} },
  },
  actions: { globalShopifySync: {} },
};