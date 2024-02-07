"use client"
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  SvgIconClassKey,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import Logo from "./Logo"
import Link from "next/link"
import {
  ContactsOutlined,
  DesignServicesOutlined,
  Home,
  InfoOutlined,
  Language,
  LanguageOutlined,
  MenuBook,
  SvgIconComponent,
} from "@mui/icons-material"
import { ReactNode, useState } from "react"
import MenuIcon from "@mui/icons-material/Menu"
import { usePathname, useRouter } from "next/navigation"
import { OverridableComponent } from "@mui/material/OverridableComponent"

export default function HeaderBar() {
  const [menuShown, setMenuShown] = useState(false)
  const theme = useTheme()
  const isSm = !useMediaQuery(theme.breakpoints.up("sm"))
  const Menu = (
    <Box
      sx={{
        display: { xs: "block", sm: "none" },
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        bgcolor: "background.paper",
        boxShadow: "0px -1px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          py: 1,
        }}
      >
        <HeadItem text="Services" />
        <HeadItem text="About Us" />
        <HeadItem text="Contact Us" highlighted href="#contactus" />
      </Box>
    </Box>
  )
  return (
    <>
      <AppBar
        color="inherit"
        sx={{ boxShadow: 0, backdropFilter: "blur(8px)" }}
      >
        <Box
          sx={{
            px: { xs: 1, sm: 1, md: 2, lg: 3, xl: 4 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {false && !isSm ? null : (
            <IconButton onClick={() => setMenuShown(!menuShown)}>
              <MenuIcon />
            </IconButton>
          )}
          <Link href="/">
            <IconButton>
              <Logo />
            </IconButton>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              gap: 1,
              display: "flex",
              // justifyContent: "center",
            }}
          >
            {isSm ? null : (
              <>
                <LangItem />
                <HeadItem text="Services" />
                <HeadItem text="About Us" />
              </>
            )}
            <HeadItem text="Contact Us" highlighted href="#contactus" />
          </Box>

          <Box>{/* <Button variant="outlined">Do Action</Button> */}</Box>
        </Box>
      </AppBar>
      <MainDrawer open={menuShown} onClose={() => setMenuShown(false)} />
    </>
  )
}

function MainDrawer(props: { open: boolean; onClose: () => void }) {
  const items: {
    Icon?: SvgIconComponent
    divider?: boolean
    text: string
    href: string
  }[] = [
    { Icon: Home, text: "Home", href: "/" },
    { Icon: DesignServicesOutlined, text: "Services", href: "/services" },
    { Icon: ContactsOutlined, text: "Contact Us", href: "/about" },
    { Icon: InfoOutlined, text: "About Us", href: "/about" },
    { text: "", href: "", divider: true },
    { Icon: LanguageOutlined, text: "عربي", href: "/" },
  ]
  const router = useRouter()
  const path = usePathname()

  return (
    <Drawer anchor={"left"} open={props.open} onClose={props.onClose}>
      <Box
        sx={{
          width: 250,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 2,
        }}
      >
        <List>
          {items.map((item, index) =>
            item.divider ? (
              <Divider key={index} />
            ) : (
              <ListItem disablePadding key={index}>
                <Link
                  style={{
                    width: "100%",
                    textDecoration: "none",
                    color: "unset",
                  }}
                  href={item.href}
                >
                  <ListItemButton
                    sx={{
                      width: "100%",
                      textDecoration: "none",
                      textTransform: "capitalize",
                    }}
                  >
                    <ListItemIcon>
                      {item.Icon ? (
                        <item.Icon
                          color={path == item.href ? "primary" : "inherit"}
                        />
                      ) : null}
                    </ListItemIcon>
                    <Typography
                      fontWeight={path == item.href ? "bold" : "inherit"}
                      color={path == item.href ? "primary" : "inherit"}
                    >
                      {item.text}
                    </Typography>
                  </ListItemButton>
                </Link>
              </ListItem>
            )
          )}
        </List>
      </Box>
    </Drawer>
  )
}

function HeadItem(props: {
  text: string
  current?: boolean
  highlighted?: boolean
  href?: string
}) {
  // return <></>
  const buttonComponent = (
    <Button
      color={props.highlighted ? "primary" : "secondary"}
      variant={
        props.highlighted ? "contained" : props.current ? "outlined" : "text"
      }
    >
      {props.text}
    </Button>
  )

  if (props.href) return <Link href={props.href}>{buttonComponent}</Link>
  return buttonComponent
}

function LangItem() {
  return (
    <Link href="/" passHref>
      <Button color={"secondary"} variant={"text"} startIcon={<Language />}>
        عربي
      </Button>
    </Link>
  )
}
