import {
  CheckBoxRounded,
  CheckCircleOutline,
  CheckCircleRounded,
  CheckOutlined,
  CheckRounded,
  CheckroomOutlined,
} from "@mui/icons-material"
import { Card, Paper, Typography } from "@mui/material"
import Box from "@mui/material/Box"
import Image from "next/image"
import { ReactNode } from "react"

export default function AboutUsSection() {
  return (
    <Box>
      <Box
        // height={"60rem"}
        width="100%"
        sx={{
          p: 2,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Header />
        <Body />
        <Footer />
        <Box
          sx={{
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* <Paper sx={{ p: 2, maxWidth: { xs: "100%", md: "30rem" } }}> */}

          {/* </Paper> */}
        </Box>
      </Box>
    </Box>
  )
}

function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "10em",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" fontWeight={"bold"}>
        The begining was from our deep thinking by providing smart solutions to
        add elegant touches to finishing work
      </Typography>
    </Box>
  )
}

function Body() {
  return (
    <Box
      sx={{
        p: 4,
        alignSelf: "center",
        alignItems: "stretch",
        display: "flex",
        flexDirection: "row",
        height: "100%",
        gap: 3,
        flexWrap: "wrap",
      }}
    >
      <BodyTextSection />
      <Box
        sx={{
          display: {
            xl: "inline",
          },
          position: "relative",
          height: "100%",
          width: "100%",
          backgroundColor: "black",
        }}
      >
        <Image
          objectFit="cover"
          layout="fill"
          style={{ opacity: 1 }}
          alt="Picture of the office"
          src="/img/design office.png"
        />
      </Box>
    </Box>
  )
}

function BodyTextSection() {
  return (
    <Box
      sx={{
        mt: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Image
        objectFit="cover"
        width="230"
        height="230"
        alt="East Crown Logo"
        src="/logo.png"
      />
      <Box sx={{}}>
        {/* <Typography
          fontSize={"2rem"}
          display={"inline"}
          // color="primary"
          fontWeight={"bold"}
        >
          East Crown{" "}
        </Typography> */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <TextWithStartingCheckIcon text="Was established with years of experience" />
          <TextWithStartingCheckIcon text="Provides integgrated srevices according to international standards" />
          <TextWithStartingCheckIcon text="Implemented actual projects of the highest quality at competitive price" />
          <TextWithStartingCheckIcon text="Always strive to keep pace with modern developments" />
          <Typography display={"inline"} fontSize={"1.5rem"}></Typography>
          <Typography display={"inline"} fontSize={"1.5rem"}></Typography>
        </Box>
      </Box>
    </Box>
  )
}

function TextWithStartingCheckIcon(props: { text: string }) {
  return (
    <TextWithStartingIcon
      text={props.text}
      icon={<CheckCircleOutline color="secondary" />}
    />
  )
}

function TextWithStartingIcon(props: { text: string; icon: ReactNode }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 1,
        alignItems: "center",
      }}
    >
      {props.icon}
      <Typography display={"inline"} fontSize={"1.5rem"}>
        {props.text}
      </Typography>
    </Box>
  )
}

function Footer() {
  return (
    <Box sx={{ mt: 8 }} textAlign={"center"}>
      <Typography
        fontWeight={"bold"}
        fontSize={"2rem"}
        // color="white"
        display={"inline"}
      >
        Innovative ideas{" "}
      </Typography>
      <Typography fontSize={"2rem"} display={"inline"}>
        were our support and the source of our strength
      </Typography>
    </Box>
  )
}
