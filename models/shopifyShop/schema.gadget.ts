import type { GadgetModel } from "gadget-server";

// This metadata describes a model's schema
// View and edit your model in the Gadget editor at https://myapp.gadget.dev/edit
export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  shopifyModel: "shop",
  shopifyFields: [
    "accessToken", "address1", "address2", "checkoutApiSupported", "cookieConsentLevel", "country", "countryCode", "countryName","countryTaxes","currency", "customerEmail", "domain", "eligibleForCardReaderGiveaway", "eligibleForPayments", "email", "enabledPresentmentCurrencies", "finances", "forceSsl", "gdprRequests", "googleAppsDomain", "googleAppsLoginEnabled", "grantedScopes", "hasDiscounts", "hasGiftCards", "hasStorefront", "ianaTimezone", "installedViaApiKey", "latitude", "longitude", "marketingSmsContentEnabledAtCheckout", "moneyFormat", "moneyInEmailsFormat", "moneyWithCurrencyFormat", "moneWithCurrencyInEmailsFormat", "multiLocationEnabled", "myshopifyDomain", "name", "passwordEnabled", "phone", "planDisplayName", "planName", "preLaunchEnabled", "primaryLocale", "products", "province", "provinceCode", "registeredWebhooks", "requiresExtraPaymentAgreement", "setupRequired", "shopOwner", "shopifyCreatedAt", "shopifyUpdatedAt", "source", "state", "syncs", "taxShipping", "taxesIncluded", "timezone", "transactionalSmsDisabled", "weightUnit", "zipCode"
  ],
  fields: {
  },
};