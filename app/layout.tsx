import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import type { Metadata } from "next"
import { theme, themeOptions } from "./theme"
import imgPaths from "@/me/imgPaths"
// import { Inter } from "next/font/google"

// const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

// const theme = createTheme(themeOptions)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>East Crown For Construction</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="description"
          content={
            "Innovative ideas were our support and the source of strength"
          }
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" type="image/x-icon" href={imgPaths.favicon} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&family=Tajawal:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <ThemeProvider theme={theme}>
        <body>
          <CssBaseline />
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
}
