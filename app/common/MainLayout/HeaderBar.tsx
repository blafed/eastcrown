import { AppBar, Box, Button, Icon, IconButton } from "@mui/material"
import Logo from "./Logo"
import Link from "next/link"
import { Language } from "@mui/icons-material"

export default function HeaderBar() {
  return (
    <AppBar color="inherit" sx={{ boxShadow: 0, backdropFilter: "blur(8px)" }}>
      <Box
        sx={{
          px: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link href="/">
          <IconButton>
            <Logo />
          </IconButton>
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            gap: 1,
            display: "flex",
            // justifyContent: "center",
          }}
        >
          <LangItem />
          <HeadItem text="Services" />
          <HeadItem text="About Us" />
          <HeadItem text="Contact Us" highlighted href="#contactus" />
        </Box>

        <Box>{/* <Button variant="outlined">Do Action</Button> */}</Box>
      </Box>
    </AppBar>
  )
}

function HeadItem(props: {
  text: string
  highlighted?: boolean
  href?: string
}) {
  // return <></>
  const buttonComponent = (
    <Button
      color={props.highlighted ? "primary" : "secondary"}
      variant={props.highlighted ? "contained" : "text"}
    >
      {props.text}
    </Button>
  )

  if (props.href) return <Link href={props.href}>{buttonComponent}</Link>
  return buttonComponent
}

function LangItem() {
  return (
    <Link href="/ar">
      <Button color={"secondary"} variant={"text"} startIcon={<Language />}>
        العربية
      </Button>
    </Link>
  )
}
