import Image from "next/image"
import MainLayout from "./common/MainLayout"
import { Box, Button, Grid, Grow, Typography } from "@mui/material"
import IntroSection from "./home/IntroSection"
import AboutUsSection from "./home/AboutUsSection"
import ServicesSection from "./home/ServicesSection"
import OursSection from "./home/OursSection"

export default function Home() {
  return (
    <MainLayout>
      <IntroSection />
      <Box sx={{ mt: 2 }} />
      <AboutUsSection />
      <Box sx={{ mt: 2 }} />
      <OursSection />

      {/* <MainSection /> */}
    </MainLayout>
  )
}

function MainSection() {
  return (
    <Box sx={{ height: "30rem" }}>
      <Grid container sx={{ height: "100%" }}>
        <Grid item sm={6} xs={12} alignItems={"center"}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography textAlign={"center"}>
              <Typography fontWeight={"bold"}>
                Empty Space Wherever They Are Push Us
              </Typography>
              <Typography color="primary" fontWeight={"bold"}>
                To Be Creative
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Grow in timeout={1000}>
            <Box
              sx={{
                position: "relative",
                height: "100%",
                width: "100%",
                p: 0,
              }}
            >
              a{" "}
              <Image
                objectFit="cover"
                layout="fill"
                alt="Picture of the office"
                src="/img/chairs.jpg"
              />
            </Box>
          </Grow>
        </Grid>
      </Grid>
    </Box>
  )
  return <Box sx={{ disply: "flex", flexDirection: "row" }}></Box>
}
