import type { GadgetModel } from "gadget-server";

// This metadata describes a model's schema
// View and edit your model in the Gadget editor at https://myapp.gadget.dev/edit
export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  fields: {
    roles: { type: "RoleAssignments", default: ["unauthenticated"] },
    state: { type: "RecordState", validations: [{ type: "required" }] },
  },
};