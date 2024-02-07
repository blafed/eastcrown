import imgPaths from "@/me/imgPaths"
import { Box, IconButton } from "@mui/material"
import Image from "next/image"

export default function Logo(props: { size?: number }) {
  const size = props.size || 50
  return (
    <Box sx={{ width: size, height: size, position: "relative" }}>
      <Image
        src={imgPaths.logo}
        objectFit="contain"
        alt="West Crown Logo"
        layout="fill"
      />
    </Box>
  )
}
