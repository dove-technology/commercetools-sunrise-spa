// eslint-disable-next-line no-console
console.log("using host:", process.env.VUE_APP_CT_API_HOST);
let localConfig = {};
if(process.env.VUE_APP_LOCAL_SUNRISE_CONFIG){
  localConfig = require(process.env.VUE_APP_LOCAL_SUNRISE_CONFIG).default;
}

export default {
  ct: {
    auth: {
      host:
        process.env.VUE_APP_CT_AUTH_HOST ||
        "https://auth.europe-west1.gcp.commercetools.com",
      projectKey:
        process.env.VUE_APP_CT_PROJECT_KEY || "sunrise-spa",
      credentials: {
        clientId:
          process.env.VUE_APP_CT_CLIENT_ID ||
          "jFVHj0-tO-THQt9evnGTJ2fD",
        clientSecret:
          process.env.VUE_APP_CT_CLIENT_SECRET ||
          "eUQgmtanysDpYxlOePOhcFklrwa5X8Sj",
      },
      scopes: [
        process.env.VUE_APP_CT_SCOPE ||
          "manage_my_profile:sunrise-spa create_anonymous_token:sunrise-spa" +
            " manage_my_payments:sunrise-spa view_products:sunrise-spa manage_my_orders:sunrise-spa" +
            " manage_my_shopping_lists:sunrise-spa",
      ],
    },
    api:
      process.env.VUE_APP_CT_API_HOST ||
      "https://api.europe-west1.gcp.commercetools.com",
  },
  languages: {
    en: "English",
    de: "Deutsch",
  },
  countries: {
    DE: "Deutschland",
    US: "United States",
  },
  formats: {
    number: {
      DE: {
        currency: {
          style: "currency",
          currency: "EUR",
          currencyDisplay: "symbol",
        },
      },
      US: {
        currency: {
          style: "currency",
          currency: "USD",
        },
      },
    },
    datetime: {
      US: {
        short: {
          year: "numeric",
          month: "short",
          day: "numeric",
        },
      },
      DE: {
        short: {
          year: "numeric",
          month: "short",
          day: "numeric",
        },
      },
    },
  },
  categories: {
    salesExternalId: "6",
  },
  facetSearches: [
    {
      name: "size",
      type: "text",
      label: {
        it: "Size",
        de: "Größe",
        en: "Size",
      },
    },
    {
      name: "color",
      type: "lnum",
      component: "colors",
      label: {
        de: "Farbe",
        it: "Color",
        en: "Color",
      },
    },
    {
      name: "designer",
      type: "enum",
      component: "designer",
      label: {
        it: "Designer",
        de: "Designer",
        en: "Designer",
      },
    },
  ],
  detailAttributes: [
    "designer",
    "colorFreeDefinition",
    "size",
    "style",
    "gender",
    "articleNumberManufacturer",
  ],
  variantSelector: ["color", "size"],
  variantInProductName: ["size"],
  ...localConfig
};
