import { Card, Paper, Typography } from "@mui/material"
import Box from "@mui/material/Box"
import Image from "next/image"

export default function ServicesSection() {
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
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Paper sx={{ p: 2, maxWidth: "30rem" }}>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ mt: 2 }}>
                <Typography>
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
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  )
}
