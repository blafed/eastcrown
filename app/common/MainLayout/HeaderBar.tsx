import { AppBar, Box, Button, IconButton } from "@mui/material"
import Logo from "./Logo"
import Link from "next/link"

export default function HeaderBar() {
  return (
    <AppBar color="transparent">
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
        <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "center" }}>
          <Button>Hello</Button>
          <Button>Hello</Button>
        </Box>

        <Box>
          <Button variant="contained">Do Action</Button>
        </Box>
      </Box>
    </AppBar>
  )
}
