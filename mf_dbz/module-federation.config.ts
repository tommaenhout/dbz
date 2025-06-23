export const mfConfig = {
  name: "mf_dbz",
  exposes: {},
  remotes: {
    mf_vue_cards: "mf_vue_cards@http://localhost:8081/mf-manifest.json",
    mf_navbar: "mf_navbar@http://localhost:8082/mf-manifest.json", 
    mf_card_detail: "mf_card_detail@http://localhost:8083/mf-manifest.json",
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
    "vue": {
      singleton: true,
    },
    "react-router": {
      singleton: true,
    },
    "react-router-dom": {
      singleton: true,
    },
  },
};

