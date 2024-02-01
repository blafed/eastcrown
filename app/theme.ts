"use client"
import { ThemeOptions, createTheme } from "@mui/material/styles"

const font = "'Rubik', sans-serif"

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#CD1F29",
    },
    secondary: {
      main: "#05429b",
    },
    error: {
      main: "#ff9100",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#ffd180",
    },
    info: {
      main: "#81d4fa",
    },
    success: {
      main: "#00c853",
    },
  },
  typography: {
    h1: {
      fontFamily: font,
    },
    fontFamily: font,
    fontWeightLight: 300,
    button: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    // MuiButton: {
    //   defaultProps: {
    //     sx: {
    //       "&::after": {
    //         content: '""',
    //         display: "block",
    //         position: "absolute",
    //         left: 0,
    //         top: 0,
    //         width: "100%",
    //         height: "100%",
    //         opacity: 0,
    //         transition: "all 0.3s",
    //         boxShadow: "0 0 10px 10px rgba(0, 123, 255, 0.3)",
    //       },

    //       "&:active::after": {
    //         boxShadow: "0 0 0 0 rgba(0, 123, 255, 0.3)",
    //         position: "absolute",
    //         borderRadius: "5px",
    //         left: 0,
    //         top: 0,
    //         opacity: 1,
    //         transition: "0s",
    //       },
    //       "&:active": {
    //         //underline
    //         // textDecoration: "underline",
    //       },
    //     },
    //   },
    // },
  },
}

export const theme = createTheme(themeOptions)
