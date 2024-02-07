"use client"
import { CheckOutlined } from "@mui/icons-material"
import {
  Card,
  Grid,
  Grow,
  List,
  ListItem,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import Box from "@mui/material/Box"
import Image from "next/image"

type ItemType = {
  bgimg: string
  title: string
  desc?: string
  listOfThings?: string[]
}
export default function ServicesSection() {
  const itemSizes = {
    xs: 12,
  }
  const items: ItemType[] = [
    {
      bgimg: "partitions.jpg",
      title: "Partitions",
      desc: "All types of partitions complete with all accessories",
      //such as fixed & mobile, glass or wood, protective wall, gypsum, tolilets, workstations, complete with all accessories
      listOfThings: [
        "fixed & mobile partitions",
        "protective wall partitions",
        "gypsum partitions",
        "glass or wood partitions",
        "workstations partitions",
        "toilets partitions",
      ],
    },
    {
      bgimg: "ceilings.jpg",
      title: "Ceilings",
      desc: "All types of gypsum & suspended ceilings",
    },
    {
      bgimg: "floors.jpg",
      title: "Floors",
      listOfThings: ["vinyl floors", "raised floors", "stamped concrete"],
    },
    {
      bgimg: "aluminum.jpg",
      title: "Aluminum & glass",
      listOfThings: ["windows", "doors", "curtain walls", "structural glazing"],
      // desc: "Different types of products such ",
    },
  ]

  const gridHeight = 140
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          flexDirection: "column",
          py: 2,
        }}
      >
        <Typography variant="h2" fontWeight={"bold"}>
          Services
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Grid
            alignItems={"stretch"}
            spacing={2}
            container
            sx={{ height: { xs: gridHeight + "rem" } }}
          >
            {items.map((item, index) => (
              <Grid
                height={gridHeight / 4 + "rem"}
                item
                {...itemSizes}
                key={index}
              >
                <Item alt={index % 2 == 0} {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

function Item(props: ItemType & { alt: boolean }) {
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"))

  const alt = props.alt && isMd

  const imageComponent = (
    <Box
      sx={{
        // flexGrow: 1,
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Image
        style={{}}
        layout="fill"
        objectFit="cover"
        src={`/img/${props.bgimg}`}
        alt={props.title}
      />
    </Box>
  )

  const textComponent = (
    <Box
      sx={{
        width: "100%",
        p: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // bgcolor: "black",
      }}
    >
      <Typography variant="h3">{props.title}</Typography>
      {props.desc && (
        <Typography sx={{ opacity: 0.7 }}>{props.desc}</Typography>
      )}
      {props.listOfThings && (
        <List>
          {props.listOfThings.map((thing, index) => (
            <ListItem key={index}>
              <CheckOutlined />
              <Typography textTransform={"capitalize"}>{thing}</Typography>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  )

  return (
    <Grow in timeout={1000}>
      <Box
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: isMd ? "row" : "column",
            height: "100%",
            width: "100%",
            transitionDuration: "0.3s",
            ":hover": {
              bgcolor: alt ? "primary.light" : "primary.light",
              color: "white",
              transitionDuration: "0.3s",
            },
            // bgcolor: "#555",
          }}
        >
          {alt ? imageComponent : textComponent}
          {alt ? textComponent : imageComponent}
        </Box>
      </Box>
    </Grow>
  )
}
