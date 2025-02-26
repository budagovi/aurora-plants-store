import "@mui/material/styles";

// *
// * Extending custom mui Theme by adding custom variables to existing interfaces using module augmentation
// *

declare module "@mui/material/styles" {
  interface Palette {
    white: Palette["primary"];
  }

  interface PaletteOptions {
    white?: PaletteOptions["primary"];
  }
}

// *
// * Enabling custom variables to be passed as props' values to specific mui elements
// *

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    white: true;
  }
}
