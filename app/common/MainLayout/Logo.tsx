import { Box, IconButton } from "@mui/material"
import Image from "next/image"

export default function Logo() {
  return (
    <Box>
      <Image src="/logo.png" alt="West Crown Logo" width={50} height={50} />
    </Box>
  )
}
