import CustomTypography from "@/app/components/customTypography";
import { Grid, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  const theme = useTheme();
  return (
    <Grid justifyContent="center" container>
      <CustomTypography
        text={
          "\n\nI am currently looking for other creative minds to work, grow and network. If you've got an exciting project you wish to work on together, get in touch!\n\n"
        }
      />
      <Grid container justifyContent="space-evenly" gap={3}>
        <Link
          target="_blank"
          style={{ color: "unset" }}
          href={"https://github.com/sparsh-hurkat"}
        >
          <Grid container alignItems="flex-end" gap={1}>
            <FaGithub fontSize={32} />
            <Typography variant="button" color={theme.palette.success.main}>
              {"github.com/sparsh-hurkat"}
            </Typography>
          </Grid>
        </Link>
        <Link
          target="_blank"
          style={{ color: "unset" }}
          href={"https://www.linkedin.com/in/sparsh-hurkat/"}
        >
          <Grid container alignItems="flex-end" gap={1}>
            <FaLinkedin fontSize={32} />
            <Typography variant="button" color={theme.palette.success.main}>
              {"linkedin.com/in/sparsh-hurkat"}
            </Typography>
          </Grid>
        </Link>
        <Link
          target="_blank"
          style={{ color: "unset" }}
          href={"mailto:hurkatsparsh@gmail.com"}
        >
          <Grid container alignItems="flex-end" gap={1}>
            <IoMail fontSize={32} />
            <Typography variant="button" color={theme.palette.success.main}>
              {"hurkatsparsh@gmail.com"}
            </Typography>
          </Grid>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Contact;
