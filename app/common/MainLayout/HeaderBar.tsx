import { AppBar, Box, Button, IconButton } from "@mui/material"
import Logo from "./Logo"
import Link from "next/link"

export default function HeaderBar() {
  return (
    <AppBar color="transparent" sx={{ boxShadow: 0 }}>
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
          <HeadItem text="About Us" />
          <HeadItem text="Our Team" />
          <HeadItem text="Our Goal" />
          <HeadItem text="Our Values" />
          <HeadItem text="Our Serviecs" />
          <HeadItem text="Our Sucess partners" />
        </Box>

        <Box>{/* <Button variant="outlined">Do Action</Button> */}</Box>
      </Box>
    </AppBar>
  )
}

function HeadItem(props: { text: string }) {
  return <></>
  return <Button color="secondary">{props.text}</Button>
}
