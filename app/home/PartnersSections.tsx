import { Box, Grid, Paper, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
const items: any = {
  banque: {
    alt: "banque saudi francsi",
    src: "/img/bsfi.jpg",
    href: "https://www.alfransi.com.sa/",
  },
  sfd: {
    alt: "saudi fund for development",
    src: "/img/sfd.png",
    href: "https://www.sfd.gov.sa/",
  },
  etec: {
    alt: "education & training evaluation commission",
    src: "/img/Saudi_ETEC_logo.png",
    href: "https://www.my.gov.sa/wps/portal/snp/agencies/agencyDetails/AC358/!ut/p/z0/04_Sj9CPykssy0xPLMnMz0vMAfIjo8zivQIsTAwdDQz9LQwNzQwCnS0tXPwMvYwNDAz0g1Pz9L30o_ArAppiVOTr7JuuH1WQWJKhm5mXlq8f4ehsbGqhX5DtHg4A5VtlGw!!/",
  },
  almousa: {
    alt: "mousa almousa company",
    src: "/img/almosa-Group.png",
    href: "https://www.my.gov.sa/wps/portal/snp/agencies/agencyDetails/AC358/!ut/p/z0/04_Sj9CPykssy0xPLMnMz0vMAfIjo8zivQIsTAwdDQz9LQwNzQwCnS0tXPwMvYwNDAz0g1Pz9L30o_ArAppiVOTr7JuuH1WQWJKhm5mXlq8f4ehsbGqhX5DtHg4A5VtlGw!!/",
  },
  zakat: {
    alt: "zakat tax & customs authority",
    src: "/img/zakat.png",
    href: "https://zatca.gov.sa/",
  },
  care: {
    alt: "care national hospital",
    src: "/img/care.png",
    href: "https://care.med.sa/",
  },
  tatweer: {
    alt: "tatweer transportation services company",
    src: "/img/tatweer.png",
    href: "https://www.rafedsa.com/ar",
  },
}
export default function PartnersSections() {
  const gridSpace = {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
  }

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
            md: "40rem",
          },
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
          {Object.keys(items).map((key, index) => (
            <Grid key={index} item {...gridSpace}>
              <Item
                alt={items[key].alt}
                src={items[key].src}
                href={items[key].href}
              />
            </Grid>
          ))}
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

function Item(props: { alt: string; src: string; href: string }) {
  return (
    <Link passHref href={props.href} target="_blank">
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
    </Link>
  )
}
