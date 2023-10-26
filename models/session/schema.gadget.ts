import type { GadgetModel } from "gadget-server";

// View and edit your model in the Gadget editor at https://myapp.gadget.dev/edit
export const schema: GadgetModel = {
  dbTableId: "ss-aaaa",
  fields: {
    roles: { type: "RoleAssignments", default: ["unauthenticated"], dbFieldId: "ss-vava" },
    shop: { type: "BelongsTo", relatedModel: "shopifyShop", dbFieldId: "ss-addd" },
    shopifySID: { type: "String" },
    state: { type: "RecordState", validations: [{ type: "required" }], dbFieldId: "ss-ewef"  },
  },
};

