import { Box, IconButton } from "@mui/material"
import Image from "next/image"

export default function Logo(props: { size?: number }) {
  const size = props.size || 50
  return (
    <Box>
      <Image src="/logo.png" alt="West Crown Logo" width={size} height={size} />
    </Box>
  )
}
