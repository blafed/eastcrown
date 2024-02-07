import { Box, Button, ButtonBase, Divider, Typography } from "@mui/material"
import Link from "next/link"
import MuiLink from "@mui/material/Link"
import React, { ReactNode } from "react"
import { Call, Email, Place } from "@mui/icons-material"
export default function Footer() {
  //footer in materialui
  return (
    <Box
      id="contactus"
      sx={{
        minHeight: "4rem",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        width: "100%",
        bgcolor: "black",
        color: "white",
        p: 4,
        gap: 1.5,
      }}
    >
      {/* <Typography variant="h2">Contact Us</Typography> */}
      <Section
        href="tel:+966541258862"
        icon={<Call sx={{ color: "white", zoom: 1 }} />}
        text="+966 5412 58862"
      />

      <Section
        icon={<Place sx={{ color: "white", zoom: 1 }} />}
        text="Al Riyadh, Saudi Arabia"
        href="https://maps.app.goo.gl/4mgUF2KMrdy9xrM66"
        blank
      />
      <Section
        icon={<Email sx={{ color: "white", zoom: 1 }} />}
        text="info@eastcrown.com.sa"
        href="mailto:info@eastcrown.com.sa"
      />
      {/* <Divider sx={{ bgcolor: "white" }} /> */}
      <Typography color="grey" variant="caption">
        @2023 East Crown
      </Typography>

      {/* <Box sx={{ flexGrow: 1 }} /> */}
      {/* <Typography>eastcrown.com.sa</Typography> */}
      {/* <Link passHref href="tel:+966541258862">
        <Call />
        <Typography color="white">+966541258862</Typography>
      </Link> */}
      {/* <Box sx={{ p: 2, color: "white", width: "100%" }}> */}
      {/* <Link href="/"> */}

      {/* </Link> */}
      {/* </Box> */}
    </Box>
  )
}

function Section(props: {
  icon: ReactNode
  text: string
  href?: string
  blank?: boolean
}) {
  const ButtonComponent = (
    // <ButtonBase color="inherit" sx={{ width: "fit-content" }}>
    <Box
      sx={{
        width: "fit-content",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
      }}
    >
      {React.isValidElement(props.icon) ? React.cloneElement(props.icon) : null}
      <Typography color="white">{props.text}</Typography>
    </Box>
    // </ButtonBase>
  )
  if (props.href)
    return (
      <Link
        style={{ textDecoration: "none" }}
        href={props.href || ""}
        passHref
        target={props.blank ? "_blank" : "_self"}
      >
        {ButtonComponent}
      </Link>
    )
  return ButtonComponent
}
