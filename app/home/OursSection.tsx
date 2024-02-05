import { CheckCircleOutline, Flag, People } from "@mui/icons-material"
import { Card, Divider, Grid, Paper, Typography } from "@mui/material"
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
            style={{ opacity: 0.9, filter: "blur(4px)" }}
            alt="Picture of the office"
            src="/img/office wood.png"
          />
          {/* <Box
            sx={{
              height: "100%",
              width: "100%",
              bgcolor: "white",
            }}
          ></Box> */}
        </Box>
        <Box
          sx={{
            width: "80%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Grid
            alignItems={"stretch"}
            direction={"row"}
            justifyContent={"center"}
            container
            spacing={2}
          >
            <Grid item {...gridOptions}>
              <Term title="Our Team" icon={<People sx={{ zoom: 2 }} />}>
                <Typography>
                  A team of specialists in the field of innovating and providing
                  solutions for the supply and installation of finishing work
                </Typography>
              </Term>
            </Grid>
            <Grid item {...gridOptions}>
              <Term title="Our Goal" icon={<Flag sx={{ zoom: 2 }} />}>
                <Typography>
                  To be always trusted by customers, to form continuous
                  partnerships
                </Typography>
                <Typography>
                  To reach a leading position in our field by commiting to
                  provide our services with
                  <b> high quality </b> at
                  <b> competitive prices </b>
                </Typography>
              </Term>
            </Grid>
            <Grid item {...gridOptions}>
              <Term
                title="Our Values"
                icon={<CheckCircleOutline sx={{ zoom: 2 }} />}
              >
                <Typography fontWeight={"bold"}>
                  Customers satisfaction is our top priority
                </Typography>
                <Typography>
                  We practice win-win partnerships with our customers
                </Typography>
                <Typography>Always finish before deadline</Typography>
              </Term>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

function Term(props: {
  title: string
  children?: ReactNode
  icon?: ReactNode
}) {
  return (
    <Paper
      elevation={4}
      sx={{
        height: "100%",
        width: "100%",
        // backgroundColor: "transparent",
        // boxShadow: 5,
        p: 2,
        transition: "0.1s",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,

        // ":hover": {
        //   transform: "scale(1.05)",
        // },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        {props.icon ?? <></>}
        <Typography fontSize={"2rem"} textAlign={"center"}>
          {props.title}
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 2 }}
      >
        {props.children ?? <></>}
      </Box>
    </Paper>
  )
}
