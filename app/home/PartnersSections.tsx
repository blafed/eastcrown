import { Box, Grid, Typography } from "@mui/material"
import Image from "next/image"
export default function PartnersSections() {
  const gridSpace = {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
  }
  return (
    <Box
      sx={{
        height: "8rem",
        spacing: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography fontWeight={"bold"} variant="h2">
          Success partners
        </Typography>
      </Box>
      <Box>
        <Grid container alignItems={"stretch"}>
          <Grid item {...gridSpace}>
            <Box bgcolor={"red"} width="100%" height="100%" />
            {/* <Item alt="banque saudi francsi" src="/img/bsfi.jpg" /> */}
          </Grid>
        </Grid>
      </Box>
      <Box></Box>
    </Box>
  )
}

//banque saudi francsi
//saudi fund for development
//education & training evaluation commission
//mousa almousa company
//zakat tax & customs authority
//care national hospital
//tatweer transportation services company
//and many others of whom we are proud to be partners

function Item(props: { alt: string; src: string }) {
  return (
    <Box sx={{ position: "relative", height: "8rem", width: "8rem" }}>
      <Image
        layout="fill"
        // layout={"fill"}
        objectFit={"contain"}
        src={props.src}
        alt={props.alt}
        style={{ height: "100%", width: "100%" }}
      ></Image>
    </Box>
  )
}
