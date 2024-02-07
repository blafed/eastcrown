import { Box, Typography, Button, Grow } from "@mui/material"
import Image from "next/image"
export default function IntroSection() {
  return (
    <Box>
      <Box
        sx={{ position: "relative", height: "100vh", backgroundColor: "black" }}
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
          <Box color={"white"} textAlign={"center"}>
            <Grow in timeout={1200}>
              <Typography fontSize={"2rem"} fontWeight={"bold"}>
                Empty Space Wherever They Are Push Us
              </Typography>
            </Grow>
            <Grow in timeout={1200} style={{ transitionDelay: "0.5s" }}>
              <Typography fontSize={"4rem"} fontWeight={"bold"}>
                To Be Creative
              </Typography>
            </Grow>
            {/* <Grow in timeout={1200} style={{ transitionDelay: "1s" }}>
              <Button
                sx={{ color: "black" }}
                variant="contained"
                color="inherit"
              >
                Contact Us
              </Button>
            </Grow> */}
          </Box>
          {/* <Button variant="contained">Contact Us</Button> */}
        </Box>
      </Box>
    </Box>
  )
}
