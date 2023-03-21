import {
  Grid,
  Typography,
  Link,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Container,
} from "@mui/material";
// import { styled } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

// const CustomFooter = styled("footer")(({ theme }) => ({
//   backgroundColor: theme.palette.primary.main,
//   color: theme.palette.primary.contrastText,
//   padding: theme.spacing(6, 0),
// }));

const Footer = () => {
  return (
    // <CustomFooter>
    <div className="footer">
    <Container maxWidth="xl" color="primary" >
      <Grid margin={"0rem"} container spacing={2} >
        <Grid item xs={12} md={3}>
          <Typography  variant="h6" component="h2" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Education Hub is a leading educational institution that provides
            quality education to students around the world. Our mission is to
            empower individuals with the knowledge and skills they need to
            succeed in today's competitive world.
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" component="h2" gutterBottom>
            Quick Links
          </Typography>
          <List>
            <ListItem disablePadding>
              <Link href="#" underline="none">
                <ListItemText primary="Home" />
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link href="#" underline="none">
                <ListItemText primary="Courses" />
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link href="#" underline="none">
                <ListItemText primary="Contact Us" />
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link href="#" underline="none">
                <ListItemText primary="FAQs" />
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" component="h2" gutterBottom>
            Contact Us
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText
                primary="123 Main Street, Suite 200"
                secondary="New York, NY 10001"
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText primary="(123) 456-7890" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="info@educationhub.com" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" component="h2" gutterBottom>
            Follow Us
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Stay up to date with Education Hub news and updates by following us
            on social media.
          </Typography>
          <List sx={{ display: "flex" }}>
            <ListItem disablePadding sx={{ marginRight: "8px" }}>
              <Link href="#" underline="none">
                <ListItemIcon>
                  <i className="fab fa-facebook"></i>
                </ListItemIcon>
              </Link>
            </ListItem>
            <ListItem disablePadding sx={{ marginRight: "8px" }}>
            <Link href="#" underline="none">
                <ListItemIcon>
                  <i className="fab fa-facebook"></i>
                </ListItemIcon>
              </Link>
            </ListItem>
            </List>
            </Grid>
            </Grid>
            {/* </CustomFooter> */}
            </Container>
            </div>
  )};

  export default Footer;