import { Box, Typography, Button } from "@mui/material"
import Image from "next/image"
export default function IntroSection() {
  return (
    <Box>
      <Box
        sx={{ position: "relative", height: "80rem", backgroundColor: "black" }}
      >
        <Image
          objectFit="cover"
          layout="fill"
          style={{ opacity: 0.3 }}
          alt="Picture of the office"
          src="/img/chairs.jpg"
        />
        <Box
          sx={{
            width: "100%",
            transform: "translate(-50%, -50%)",
            position: "absolute",
            top: "50%",
            left: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography color={"white"} textAlign={"center"}>
            <Typography fontSize={"2rem"} fontWeight={"bold"}>
              Empty Space Wherever They Are Push Us
            </Typography>
            <Typography fontSize={"4rem"} fontWeight={"bold"}>
              To Be Creative
            </Typography>
          </Typography>{" "}
          <Button variant="contained">Contact Us</Button>
        </Box>
      </Box>
    </Box>
  )
}