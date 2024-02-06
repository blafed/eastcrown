import { Box, Typography } from "@mui/material"
import Link from "next/link"
import MuiLink from "@mui/material/Link"
export default function Footer() {
  //footer in materialui
  return (
    <Box
      sx={{
        height: "4rem",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        width: "100%",
        bgcolor: "black",
        color: "white",
        p: 4,
      }}
    >
      <Typography>@2023 East Crown</Typography>
      <Box sx={{ flexGrow: 1 }} />
      <Typography>eastcrown.com.sa</Typography>
      {/* <Box sx={{ p: 2, color: "white", width: "100%" }}> */}
      {/* <Link href="/"> */}

      {/* </Link> */}
      {/* </Box> */}
    </Box>
  )
}
