import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CycloneIcon from "@mui/icons-material/Cyclone";
import DuoIcon from "@mui/icons-material/Duo";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import CallIcon from "@mui/icons-material/Call";
import StoreIcon from "@mui/icons-material/Store";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import WorkIcon from '@mui/icons-material/Work';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";

interface ProjectsSlider {
  key: string;
  value: number;
  valueIcon: React.ReactNode;
  label?: string;
}

const sliderLength = 7;

export const projectsSlider: ProjectsSlider[] = [
  {
    key: "jobtracker",
    value: 100 / sliderLength * 7,
    valueIcon: <WorkIcon />,
    label: "Oct 2025",
  },
  {
    key: "pacman",
    value: 100 / sliderLength * 6,
    valueIcon: <SportsEsportsIcon />,
    label: "Sep 2025",
  },
  {
    key: "sst",
    value: 100 / sliderLength * 5,
    valueIcon: <Image src="/aws-logo.png" alt="aws" width={24} height={24} />,
    label: "Mar 2025",
  },
  {
    key: "moneyviewcms",
    value: 100 / sliderLength * 4,
    valueIcon: (
      <Image src="/nextjs-icon.png" alt="aws" width={32} height={32} />
    ),
    label: "Dec 2024",
  },
  {
    key: "spot",
    value: 100 / sliderLength * 3,
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
    value: 100 / sliderLength * 2,
    valueIcon: (
      <>
        <CallIcon />
        <StoreIcon />
      </>
    ),
    label: "2023",
  },
  {
    key: "2022",
    value: 100 / sliderLength * 1,
    valueIcon: (
      <Image src="/react-logo.png" alt="aws" width={24} height={24} />
    ),
    label: "2022",
  },
  {
    key: "2019-2021",
    value: 100 / sliderLength * 0,
    valueIcon: (
      <>
        <FlutterDashIcon />
        <CarCrashIcon />
        <HowToVoteIcon />
        <ShoppingCartIcon />
      </>
    ),
    label: "2019 - 2021",
  },
];

export const projectsSliderMobile: ProjectsSlider[] = [
  {
    key: "jobtracker",
    value: 100 / sliderLength * 7,
    valueIcon: (
      <Grid justifyContent="center" container>
        <WorkIcon />
        <Typography>Oct 2025</Typography>
      </Grid>
    ),
  },
  {
    key: "pacman",
    value: 100 / sliderLength * 6,
    valueIcon: (
      <Grid justifyContent="center" container>
        <SportsEsportsIcon />
        <Typography>Sep 2025</Typography>
      </Grid>
    ),
  },
  {
    key: "sst",
    value: 100 / sliderLength * 5,
    valueIcon: (
      <Grid justifyContent="center" container>
        <Image src="/aws-logo.png" alt="aws" width={24} height={24} />
        <Typography>Mar 2025</Typography>
      </Grid>
    ),
  },
  {
    key: "moneyviewcms",
    value: 100 / sliderLength * 4,
    valueIcon: (
      <Grid justifyContent="center" container>
        <Image src="/nextjs-icon.png" alt="aws" width={32} height={32} />
        <Typography>Dec 2024</Typography>
      </Grid>
    ),
  },
  {
    key: "spot",
    value: 100 / sliderLength * 3,
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
    value: 100 / sliderLength * 2,
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
    key: "2022",
    value: 100 / sliderLength * 1,
    valueIcon: (
      <Grid justifyContent="center" container>
        <Image src="/react-logo.png" alt="aws" width={24} height={24} />
        <Typography>2022</Typography>
      </Grid>
    ),
  },
  {
    key: "2019-2021",
    value: 100 / sliderLength * 0,
    valueIcon: (
      <Grid justifyContent="center" container>
        <Grid flexWrap="nowrap" container>
          <FlutterDashIcon />
          <CarCrashIcon />
          <HowToVoteIcon />
          <ShoppingCartIcon />
        </Grid>
        <Typography>2019 - 2021</Typography>
      </Grid>
    ),
  },
];