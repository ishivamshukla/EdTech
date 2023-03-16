import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography, Container } from "@mui/material";
import cardImage1 from "./cardImage1.png";
import cardImage2 from "./cardImage2.png";

const WhyEducationHub = () => {
  return (
    <Container maxWidth="xl" >
     <Typography margin={"4rem"} variant="h4" align="center" gutterBottom>
          Why Choose Education IIMST?
        </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Card sx={{ display: "flex", flexDirection: { xs: "column", md: "row"} }}>
          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Quality Education
            </Typography>
            <Typography variant="body1" component="p">
              At Education IIMST, we believe in providing top-notch education to
              our students. We hire the best teachers and use the latest
              teaching methodologies to ensure that our students receive the
              best education possible.
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            image={`https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`}
            alt="Quality Education"
            sx={{
                width: "100%",
                height: "100%",
                maxWidth: "400px",
                maxHeight: "400px",
              }}
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ display: "flex", flexDirection: { xs: "column", md: "row"} }}>
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Flexible Schedule
            </Typography>
            <Typography variant="body1" component="p">
              We understand that our students have busy lives. That's why we
              offer flexible schedules to accommodate their needs. Our courses
              are available online and offline, and students can study at their
              own pace.
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            image={`https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`}
            alt="Quality Education"
            sx={{
                width: "100%",
                height: "100%",
                maxWidth: "400px",
                maxHeight: "400px",
              }}
          />
        </Card>
      </Grid>
    </Grid>
    </Container>
  );
};

export default WhyEducationHub;
