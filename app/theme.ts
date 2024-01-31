"use client"
import { ThemeOptions, createTheme } from "@mui/material/styles"

const font = "'Rubik', sans-serif"

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#e60211",
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
  },
}

export const theme = createTheme(themeOptions)
