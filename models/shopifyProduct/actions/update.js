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
    let newTags = [...new Set(record.body.match(/\w+(?:'\w+)*/g))]
    const allowedTags = (await api.allowedTag.findMany()).map(record => record.tag)
    const finalTags = newTags.filter(tag => allowedTags.includes(tag))
    
    logger.info({ newTags, allowedTags, finalTags }, "applying new tags")

    const shopify = connections.shopify.current;
    await shopify.product.update(record.id, { tags: finalTags.join(',') });
  }
};

/** @type { ActionOptions } */
export const options = {
  actionType: "update"
};