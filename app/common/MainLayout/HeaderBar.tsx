import { AppBar, Box, Button, IconButton } from "@mui/material"
import Logo from "./Logo"
import Link from "next/link"

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
          <HeadItem text="Services" />
          <HeadItem text="About Us" />
          <HeadItem text="Contact Us" highlighted />
        </Box>

        <Box>{/* <Button variant="outlined">Do Action</Button> */}</Box>
      </Box>
    </AppBar>
  )
}

function HeadItem(props: { text: string; highlighted?: boolean }) {
  // return <></>
  return (
    <Button
      color={props.highlighted ? "primary" : "secondary"}
      variant={props.highlighted ? "contained" : "text"}
    >
      {props.text}
    </Button>
  )
}
