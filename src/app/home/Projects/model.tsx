import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CycloneIcon from "@mui/icons-material/Cyclone";
import DuoIcon from "@mui/icons-material/Duo";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import CallIcon from "@mui/icons-material/Call";
import StoreIcon from "@mui/icons-material/Store";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import { Grid, Typography } from "@mui/material";

export const projectsSlider = [
  {
    key: "spot",
    value: 100,
    valueIcon: (
      <>
        <CycloneIcon />
        <DuoIcon />
      </>
    ),
    label: "July 2024",
  },
  {
    key: "calling",
    value: 75,
    valueIcon: <CallIcon />,
    label: "Feb 2024",
  },
  {
    key: "bnpl",
    value: 60,
    valueIcon: <StoreIcon />,
    label: "Nov 2023",
  },
  {
    key: "moneyview",
    value: 40,
    valueIcon: <img src="/moneyview_icon.png" width="32px"></img>,
    label: "July 2022",
  },
  {
    key: "drowsy",
    value: 20,
    valueIcon: <CarCrashIcon />,
    label: "Nov 2020",
  },
  {
    key: "evoting",
    value: 10,
    valueIcon: <HowToVoteIcon />,
    label: "May 2019",
  },
  {
    key: "ecommerce",
    value: 0,
    valueIcon: <ShoppingCartIcon />,
    label: "Apr 2019",
  },
];
export const projectsSliderMobile = [
  {
    key: "spot",
    value: 100,
    valueIcon: (
      <Grid justifyContent="center" container>
        <CycloneIcon />
        <DuoIcon />
        <Typography>July 2024</Typography>
      </Grid>
    ),
  },
  {
    key: "calling",
    value: 75,
    valueIcon: (
      <Grid justifyContent="center" container>
        <CallIcon />
        <Typography>Feb 2024</Typography>
      </Grid>
    ),
  },
  {
    key: "bnpl",
    value: 60,
    valueIcon: (
      <Grid justifyContent="center" container>
        <StoreIcon />
        <Typography>Nov 2023</Typography>
      </Grid>
    ),
  },
  {
    key: "moneyview",
    value: 40,
    valueIcon: (
      <Grid justifyContent="center" container>
        <img src="/moneyview_icon.png" width="32px"></img>
        <Typography>July 2022</Typography>
      </Grid>
    ),
  },
  {
    key: "drowsy",
    value: 20,
    valueIcon: (
      <Grid justifyContent="center" container>
        <HowToVoteIcon />
        <Typography>Nov 2020</Typography>
      </Grid>
    ),
  },
  {
    key: "evoting",
    value: 10,
    valueIcon: (
      <Grid justifyContent="center" container>
        <HowToVoteIcon />
        <Typography>May 2019</Typography>
      </Grid>
    ),
  },
  {
    key: "ecommerce",
    value: 0,
    valueIcon: (
      <Grid justifyContent="center" container>
        <ShoppingCartIcon />
        <Typography>Apr 2019</Typography>
      </Grid>
    ),
  },
];
