import React from "react";
import { Card, CardContent, CardMedia, Typography, Box, Grid, TextField, Button, Container } from "@mui/material";

interface LogoCardProps {
  image: string;
  title: string;
}

const LogoCard: React.FC<LogoCardProps> = ({ image, title }) => {
  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia component="img" sx={{ width: 151 }} image={image} alt={title} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

const SubscriptionForm: React.FC = () => {
  const [email, setEmail] = React.useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Subscribing email: ${email}`);
  };

  return (
    <Box sx={{ mb: 2 }} >
      <Typography variant="h6" gutterBottom>
        Subscribe to our newsletter
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <TextField
              required
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button fullWidth variant="contained" type="submit">
              Subscribe
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

const EducationalAffiliations: React.FC = () => {
  const logos = [
    {
      image: "https://source.unsplash.com/1600x900/?university",
      title: "University of California",
    },
    {
      image: "https://source.unsplash.com/1600x900/?college",
      title: "College of William and Mary",
    },
    {
      image: "https://source.unsplash.com/1600x900/?education",
      title: "National Education Association",
    },
    {
      image: "https://source.unsplash.com/1600x900/?school",
      title: "American School Counselor Association",
    },
    {
      image: "https://source.unsplash.com/1600x900/?students",
      title: "National Association of Student Personnel Administrators",
    },
    {
      image: "https://source.unsplash.com/1600x900/?academy",
      title: "National Academy of Education",
    },
  ];

  return (
    <div className="logo-card">
    <Container maxWidth="xl">
    <Box sx={{ flexGrow: 1 }}>
      <Typography margin={"4rem"} align="center" variant="h4" gutterBottom>
        Educational Affiliations and Associations
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Grid container spacing={2}>
          {logos.map((logo) => (
            <Grid item key={logo.title} xs={12} sm={6} md={4}>
              <LogoCard {...logo} />
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* <SubscriptionForm /> */}
    </Box>
    </Container>
    </div>
  );
};

export default EducationalAffiliations;

