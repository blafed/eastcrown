"use client"
import { Card, Grid, List, ListItem, Paper, Typography } from "@mui/material"
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
    sm: 6,
    md: 6,
    lg: 4,
    xl: 3,
  }
  const items: ItemType[] = [
    {
      bgimg: "partitions.jpg",
      title: "Partitions",
      desc: "All types of partitions complete with all accessories",
      //such as fixed & mobile, glass or wood, protective wall, gypsum, tolilets, workstations, complete with all accessories
      listOfThings: [
        "fixed & mobile partitions",
        "gypsum, protective wall, glass or wood partitions",
        "workstations & toilets partitions",
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
        <Box sx={{ width: "100%" }} bgcolor="#ddd">
          <Grid container sx={{ height: "60rem" }}>
            {items.map((item, index) => (
              <Grid item {...itemSizes} key={index}>
                <Item {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

function Item(props: ItemType) {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        width: "100%",
        bgcolor: "black",
      }}
    >
      <Image
        style={{ opacity: 0.6 }}
        layout="fill"
        objectFit="cover"
        src={`/img/${props.bgimg}`}
        alt={props.title}
      />
      <Box
        sx={{
          width: "100%",
          p: 3,
          transform: "translate(-50%)",
          position: "absolute",
          top: "0%",
          left: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          // bgcolor: "black",
        }}
      >
        <Typography color={"white"} variant="h3" fontWeight={"bold"}>
          {props.title}
        </Typography>
        {props.desc && (
          <Typography sx={{ opacity: 0.7 }} color="white">
            {props.desc}
          </Typography>
        )}
        {props.listOfThings && (
          <List>
            {props.listOfThings.map((thing, index) => (
              <ListItem key={index}>
                <Typography textTransform={"capitalize"} color="white">
                  {thing}
                </Typography>
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Box>
  )
}
