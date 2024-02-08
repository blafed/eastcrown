"use client"
import {
  Box,
  Grid,
  Paper,
  PaperOwnProps,
  SxProps,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import Image from "next/image"
import Link from "next/link"
const items: any[] = [
  {
    key: "banque",
    alt: "banque saudi francsi",
    src: "/img/bsfi.jpg",
    href: "https://www.alfransi.com.sa/",
    // sx: { py: 2 },
  },
  {
    key: "sfd",
    alt: "saudi fund for development",
    src: "/img/sfd.png",
    href: "https://www.sfd.gov.sa/",
  },
  {
    key: "etec",
    alt: "education & training evaluation commission",
    src: "/img/Saudi_ETEC_logo.png",
    href: "https://www.my.gov.sa/wps/portal/snp/agencies/agencyDetails/AC358/!ut/p/z0/04_Sj9CPykssy0xPLMnMz0vMAfIjo8zivQIsTAwdDQz9LQwNzQwCnS0tXPwMvYwNDAz0g1Pz9L30o_ArAppiVOTr7JuuH1WQWJKhm5mXlq8f4ehsbGqhX5DtHg4A5VtlGw!!/",
    ratio: 0.7,
  },
  {
    key: "almousa",
    alt: "mousa almousa company",
    src: "/img/almosa-Group.png",
    href: "https://www.my.gov.sa/wps/portal/snp/agencies/agencyDetails/AC358/!ut/p/z0/04_Sj9CPykssy0xPLMnMz0vMAfIjo8zivQIsTAwdDQz9LQwNzQwCnS0tXPwMvYwNDAz0g1Pz9L30o_ArAppiVOTr7JuuH1WQWJKhm5mXlq8f4ehsbGqhX5DtHg4A5VtlGw!!/",
  },
  {
    key: "zakat",
    alt: "zakat tax & customs authority",
    src: "/img/zakat.png",
    href: "https://zatca.gov.sa/",
    ratio: 0.7,
  },
  {
    key: "care",
    alt: "care national hospital",
    src: "/img/care.png",
    href: "https://care.med.sa/",
    ratio: 0.7,
  },
  {
    key: "tatweer",
    alt: "tatweer transportation services company",
    src: "/img/tatweer.png",
    href: "https://www.rafedsa.com/ar",
    ratio: 0.8,
  },
]
export default function PartnersSections() {
  const gridSpace = {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
  }
  const theme = useTheme()
  // const isMd = useMediaQuery(theme.breakpoints.up("md"))
  // // const isSm = useMediaQuery(theme.breakpoints.only("sm"))
  // const isXs = useMediaQuery(theme.breakpoints.only("xs"))
  // const containerHeight = isMd ? 40 : 60
  // const elementsPerRow = isMd ? 3 : isXs ? 1 : 2

  return (
    <Box
      sx={{
        // height: "8rem",
        spacing: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        my: 2,
        gap: 2,
        px: 3,
      }}
    >
      <Box>
        <Typography textAlign={"center"} fontWeight={"bold"} variant="h2">
          Success Partners
        </Typography>
      </Box>
      <Box
        sx={{
          minHeight: "10rem",
          height: {
            xs: "60rem",
            md: "30rem",
          },
          // height: containerHeight + "rem",
          width: "100%",
        }}
      >
        <Grid
          sx={{ height: "100%" }}
          container
          //   alignItems={"stretch"}
          spacing={2}
          direction={"row"}
          justifyContent={"center"}
        >
          {items.map((item, index) => {
            // const dim =
            //   (containerHeight / (items.length / elementsPerRow)) *
            //   (item.ratio ?? 1)
            return (
              <Grid justifyContent={"center"} key={index} item {...gridSpace}>
                <Item
                  sx={item.sx}
                  alt={item.alt}
                  src={item.src}
                  href={item.href}
                />
              </Grid>
            )
          })}
        </Grid>
      </Box>
      <Box>
        <Typography
          color="text.secondary"
          textAlign={"center"}
          // fontWeight={"bold"}
        >
          And many other whom we are proud to be partners
        </Typography>
      </Box>
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

function Item(props: {
  alt: string
  src: string
  href: string
  sx?: PaperOwnProps
}) {
  return (
    <Link passHref href={props.href} target="_blank">
      <Paper elevation={5} sx={{ p: 1, height: "100%", ...props.sx }}>
        <Box
          sx={{
            // bgcolor: "red",
            position: "relative",
            height: "100%",
            width: "100%",
          }}
        >
          <Image
            layout="fill"
            // layout={"fill"}
            objectFit={"contain"}
            src={props.src}
            alt={props.alt}
            style={{ height: "100%", width: "100%" }}
          ></Image>
        </Box>
      </Paper>
    </Link>
  )
}
