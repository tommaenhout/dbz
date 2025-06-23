export const mfConfig = {
  name: "mf_card_detail",
  exposes: {
    "./CardDetail": "./src/CardDetail",
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: "^19.0.0",
      eager: true,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: "^19.0.0",
      eager: true,
    },
    "framer-motion": {
      singleton: true,
      requiredVersion: "^12.18.1",
    },
  },
};