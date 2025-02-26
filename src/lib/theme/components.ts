import { Components, Theme } from "@mui/material";

const components: Components<Omit<Theme, "components">> = {
  // *
  // * -=-=-=-=-=-=-=- Toolbar -=-=-=-=-=-=-=-
  // *
  MuiToolbar: {
    styleOverrides: {
      root: {},
    },
  },
};

export default components;
