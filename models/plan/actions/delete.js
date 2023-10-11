import { applyParams, save, ActionOptions, DeletePlanActionContext } from "gadget-server";

/**
 * @param { DeletePlanActionContext } context
 */
export async function run({ params, record, logger, api }) {
  applyParams(params, record);
  await save(record);
};

/**
 * @param { DeletePlanActionContext } context
 */
export async function onSuccess({ params, record, logger, api }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "delete",
};