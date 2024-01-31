import { Box } from "@mui/material"
import HeaderBar from "./HeaderBar"
import { ReactNode } from "react"

export default function MainLayout(props: { children: ReactNode }) {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <HeaderBar />
      <Box sx={{ mt: 8, p: 4 }}>{props.children}</Box>
    </Box>
  )
}
