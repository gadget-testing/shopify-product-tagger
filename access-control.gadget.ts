import type { GadgetAccessControl } from "gadget-server";

// This metadata describes the roles available in your application
// View and edit your roles and permissions in the Gadget editor at https://myapp.gadget.dev/edit/settings/permissions
export const accessControl: GadgetAccessControl = {
  type: "gadget/access-control/v1",
  roles: { 
    unauthenticated: {}, 
    "shopify-app-users": {
      models: {
        shopifyShop: {
          read: { filter: "models/shopifyShop/shopifyShop.gelly" },
          update: true ,
          install: true ,
          uninstall: true ,
          reinstall: true ,
        },
        shopifyGdprRequest: {
          read: { filter: "models/shopifyGdprRequest/shopifyGdprRequest.gelly" },
          create: true,
          update: true,
        },
        shopifyProduct: {
          read: { filter: "models/shopifyProduct/shopifyProduct.gelly" },
          create: true,
          update: true,
          delete: true,
        },
        shopifySync: {
          read: { filter: "models/shopifySync/shopifySync.gelly" },
          run: true,
          complete: true,
          error: true,
        },
      },
      actions: { globalShopifySync: false },
    } 
  },
};