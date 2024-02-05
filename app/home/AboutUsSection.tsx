import { Card, Paper, Typography } from "@mui/material"
import Box from "@mui/material/Box"
import Image from "next/image"

export default function AboutUsSection() {
  return (
    <Box>
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
          The begining was from our deep thinking by providing smart solutions
          to add elegant touches to finishing work
        </Typography>
      </Box>
      <Box
        width="100%"
        sx={{ position: "relative", display: "flex", justifyContent: "center" }}
      >
        <Box
          sx={{
            position: "relative",
            height: "60rem",
            width: "100%",
            backgroundColor: "black",
          }}
        >
          <Image
            objectFit="cover"
            layout="fill"
            style={{ opacity: 0.3 }}
            alt="Picture of the office"
            src="/img/design office.png"
          />
        </Box>
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
          <Paper sx={{ p: 2, maxWidth: { xs: "100%", md: "30rem" } }}>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ mt: 2 }}>
                <Box>
                  <Typography
                    fontSize={"3rem"}
                    display={"inline"}
                    color="primary"
                    fontWeight={"bold"}
                  >
                    East Crown{" "}
                  </Typography>
                  <Typography display={"inline"} fontSize={"1.5rem"}>
                    was established with years of experience that provdes
                    integgrated srevices according to international standards
                    and has implemented actual projects of the highest quality
                    at competitivve prices and always strive to keep pace with
                    modern developments
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>

          <Box sx={{ mt: 8 }} textAlign={"center"}>
            <Typography
              fontWeight={"bold"}
              fontSize={"2rem"}
              color="white"
              display={"inline"}
            >
              Innovative ideas{" "}
            </Typography>
            <Typography fontSize={"2rem"} color={"white"} display={"inline"}>
              were our support and the source of our strength
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
