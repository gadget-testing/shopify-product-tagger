import { applyParams, preventCrossShopDataAccess, save, ActionOptions, UpdateShopifyProductActionContext } from "gadget-server";

/**
 * @param { UpdateShopifyProductActionContext } context
 */
export async function run({ params, record, logger, api }) {
  applyParams(params, record);
  await preventCrossShopDataAccess(params, record);
  await save(record);
};

/**
 * @param { UpdateShopifyProductActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  if (record.changed('body')) {
    const newTags = record.body.split(" ").slice(0, 10);
    logger.info({ newTags, productId: params.id }, "setting new product tags");
    await connections.shopify.current.product.update(params.id, { tags: newTags })
  }
};

/** @type { ActionOptions } */
export const options = {
  actionType: "update",
  triggers: {
    shopifyWebhooks: true
  }
};