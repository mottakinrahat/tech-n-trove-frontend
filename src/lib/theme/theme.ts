import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0059B1",
    },
    secondary: {
      main: "#ECF5FF",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: false,
      },
    },
  },
});
theme.shadows[1] = "0px 5px 22px lightgray";
