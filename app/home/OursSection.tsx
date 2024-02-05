import { Card, Grid, Paper, Typography } from "@mui/material"
import Box from "@mui/material/Box"
import Image from "next/image"
import { Children, ReactNode } from "react"

export default function OursSection() {
  const gridOptions = {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 4,
  }
  return (
    <Box>
      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "10em",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" fontWeight={"bold"}>
          The begining was from our deep thinking by providing smart solutions
          to add elegant touches to finishing work
        </Typography>
      </Box> */}
      <Box sx={{ height: "2rem" }}></Box>
      <Box
        width="100%"
        sx={{ position: "relative", display: "flex", justifyContent: "center" }}
      >
        <Box
          sx={{
            position: "relative",
            height: "40rem",
            width: "100%",
            backgroundColor: "black",
          }}
        >
          <Image
            objectFit="cover"
            layout="fill"
            style={{ opacity: 0.3 }}
            alt="Picture of the office"
            src="/img/office wood.png"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Grid container spacing={2}>
            <Grid item {...gridOptions}>
              <Term title="Our Team">
                <Typography>
                  A team of specialists in the field of innovating and providing
                  solutions for the supply and installation of finishing work
                </Typography>
              </Term>
            </Grid>
            <Grid item {...gridOptions}>
              <Term title="Our Goal">
                <Typography>
                  - To be always trusted by customers, to form continuous
                  partnerships
                </Typography>
                <Typography>
                  - To reach a leading position in our field by commiting to
                  provide our services with
                  <b> high quality </b> at
                  <b> competitive prices </b>
                </Typography>
              </Term>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

function Term(props: { title: string; children?: ReactNode }) {
  return (
    <Paper
      sx={{
        backgroundColor: "transparent",
        boxShadow: 0,
        p: 2,
        transition: "0.3s",

        ":hover": {
          transform: "scale(1.2)",
        },
      }}
    >
      <Typography color="white" fontSize={"2rem"} textAlign={"center"}>
        {props.title}
      </Typography>
      {props.children ?? <></>}
    </Paper>
  )
}
