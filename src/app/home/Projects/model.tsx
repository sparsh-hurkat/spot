import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CycloneIcon from "@mui/icons-material/Cyclone";
import DuoIcon from "@mui/icons-material/Duo";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import CallIcon from "@mui/icons-material/Call";
import StoreIcon from "@mui/icons-material/Store";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import BackpackTwoToneIcon from '@mui/icons-material/BackpackTwoTone';
import { Grid, Typography } from "@mui/material";

export const projectsSlider = [
  {
    key: "testez",
    value: 100,
    valueIcon: <BackpackTwoToneIcon />,
    label: "September 2024",
  },
  {
    key: "spot",
    value: 85.6,
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
    value: 71.2,
    valueIcon: <CallIcon />,
    label: "Feb 2024",
  },
  {
    key: "bnpl",
    value: 56.8,
    valueIcon: <StoreIcon />,
    label: "Nov 2023",
  },
  {
    key: "moneyview",
    value: 42.6,
    valueIcon: (
      <img src="/moneyview_icon.png" alt="moneyview-icon" width={32}></img>
    ),
    label: "July 2022",
  },
  {
    key: "drowsy",
    value: 28.4,
    valueIcon: <CarCrashIcon />,
    label: "Nov 2020",
  },
  {
    key: "evoting",
    value: 14.2,
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
    key: "testez",
    value: 100,
    valueIcon: (
      <Grid justifyContent="center" container>
        <BackpackTwoToneIcon />
        <Typography>September 2024</Typography>
      </Grid>
    )
  },
  {
    key: "spot",
    value: 85.6,
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
    value: 71.2,
    valueIcon: (
      <Grid justifyContent="center" container>
        <CallIcon />
        <Typography>Feb 2024</Typography>
      </Grid>
    ),
  },
  {
    key: "bnpl",
    value: 56.8,
    valueIcon: (
      <Grid justifyContent="center" container>
        <StoreIcon />
        <Typography>Nov 2023</Typography>
      </Grid>
    ),
  },
  {
    key: "moneyview",
    value: 42.6,
    valueIcon: (
      <Grid justifyContent="center" container>
        <img src="/moneyview_icon.png" width="32px"></img>
        <Typography>July 2022</Typography>
      </Grid>
    ),
  },
  {
    key: "drowsy",
    value: 28.4,
    valueIcon: (
      <Grid justifyContent="center" container>
        <HowToVoteIcon />
        <Typography>Nov 2020</Typography>
      </Grid>
    ),
  },
  {
    key: "evoting",
    value: 14.2,
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
