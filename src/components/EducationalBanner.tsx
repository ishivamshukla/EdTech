import React from "react";
import { Box, Typography, Button, } from "@mui/material";
import { Link } from "react-router-dom";
// import bannerImage from "./bannerImage.png";

const EducationalBanner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundImage: `url(${`https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1232&q=80`})`,
        backgroundSize: "cover",
        height: "500px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          opacity: 0.9,
          borderRadius: "8px",
          padding: "16px",
          position: "absolute",
          bottom: "50px",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Welcome to Education IIMST
        </Typography>
        <Typography variant="body1" gutterBottom>
          Your one-stop destination for quality education and learning.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/courses"
          sx={{ mt: 2 }}
        >
          Explore Courses
        </Button>
      </Box>
    </Box>
  );
};

export default EducationalBanner;
