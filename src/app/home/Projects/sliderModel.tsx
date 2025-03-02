import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CycloneIcon from "@mui/icons-material/Cyclone";
import DuoIcon from "@mui/icons-material/Duo";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import CallIcon from "@mui/icons-material/Call";
import StoreIcon from "@mui/icons-material/Store";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import BackpackTwoToneIcon from "@mui/icons-material/BackpackTwoTone";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";

interface ProjectsSlider {
  key: string;
  value: number;
  valueIcon: React.ReactNode;
  label?: string;
}

export const projectsSlider: ProjectsSlider[] = [
  {
    key: "sst",
    value: 100,
    valueIcon: <Image src="/aws-logo.png" alt="aws" width={24} height={24} />,
    label: "Mar 2025",
  },
  {
    key: "moneyviewcms",
    value: 85.6,
    valueIcon: (
      <Image src="/nextjs-icon.png" alt="aws" width={32} height={32} />
    ),
    label: "Dec 2024",
  },
  {
    key: "testez",
    value: 71.2,
    valueIcon: <BackpackTwoToneIcon />,
    label: "Oct 2024",
  },
  {
    key: "spot",
    value: 56.8,
    valueIcon: (
      <>
        <CycloneIcon />
        <DuoIcon />
      </>
    ),
    label: "Jul 2024",
  },
  {
    key: "2023",
    value: 42.6,
    valueIcon: (
      <>
        <CallIcon />
        <StoreIcon />
      </>
    ),
    label: "2023",
  },
  {
    key: "2021",
    value: 28.4,
    valueIcon: <FlutterDashIcon />,
    label: "2021",
  },
  {
    key: "2020",
    value: 14.2,
    valueIcon: <CarCrashIcon />,
    label: "2020",
  },
  {
    key: "2019",
    value: 0,
    valueIcon: (
      <>
        <HowToVoteIcon />
        <ShoppingCartIcon />
      </>
    ),
    label: "2019",
  },
];

export const projectsSliderMobile: ProjectsSlider[] = [
  {
    key: "sst",
    value: 100,
    valueIcon: (
      <Grid justifyContent="center" container>
        <Image src="/aws-logo.png" alt="aws" width={24} height={24} />
        <Typography>Mar 2025</Typography>
      </Grid>
    ),
  },
  {
    key: "moneyviewcms",
    value: 85.6,
    valueIcon: (
      <Grid justifyContent="center" container>
        <Image src="/nextjs-icon.png" alt="aws" width={32} height={32} />
        <Typography>Dec 2024</Typography>
      </Grid>
    ),
  },
  {
    key: "testez",
    value: 71.2,
    valueIcon: (
      <Grid justifyContent="center" container>
        <BackpackTwoToneIcon />
        <Typography>Oct 2024</Typography>
      </Grid>
    ),
  },
  {
    key: "spot",
    value: 56.8,
    valueIcon: (
      <Grid justifyContent="center" container>
        <CycloneIcon />
        <DuoIcon />
        <Typography>July 2024</Typography>
      </Grid>
    ),
  },
  {
    key: "2023",
    value: 42.6,
    valueIcon: (
      <Grid justifyContent="center" container>
        <Grid flexWrap="nowrap" container>
          <CallIcon />
          <StoreIcon />
        </Grid>
        <Typography>2023</Typography>
      </Grid>
    ),
  },
  {
    key: "2021",
    value: 28.4,
    valueIcon: (
      <Grid justifyContent="center" container>
        <FlutterDashIcon />
        <Typography>2021</Typography>
      </Grid>
    ),
  },
  {
    key: "2020",
    value: 14.2,
    valueIcon: (
      <Grid justifyContent="center" container>
        <HowToVoteIcon />
        <Typography>2020</Typography>
      </Grid>
    ),
  },
  {
    key: "2019",
    value: 0,
    valueIcon: (
      <Grid justifyContent="center" container>
        <Grid flexWrap="nowrap" container>
          <HowToVoteIcon />
          <ShoppingCartIcon />
        </Grid>
        <Typography>2019</Typography>
      </Grid>
    ),
  },
];
