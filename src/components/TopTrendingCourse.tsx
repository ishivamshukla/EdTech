import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Grid,
  Container,
} from "@mui/material";

interface CourseCardProps {
  image: string;
  title: string;
  author: string;
  price: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ image, title, author, price }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {author}
        </Typography>
        <Typography variant="h6" color="text.primary">
          ${price}
        </Typography>
      </CardContent>
    </Card>
  );
};

const TopTrendingCourses: React.FC = () => {
  const courses = [
    {
      image: "https://source.unsplash.com/1600x900/?code",
      title: "JavaScript Basics",
      author: "John Doe",
      price: 99,
    },
    {
      image: "https://source.unsplash.com/1600x900/?web",
      title: "React for Beginners",
      author: "Jane Smith",
      price: 149,
    },
    {
      image: "https://source.unsplash.com/1600x900/?computer",
      title: "Python Bootcamp",
      author: "Bob Johnson",
      price: 199,
    },
    {
      image: "https://source.unsplash.com/1600x900/?code2",
      title: "Advanced JavaScript",
      author: "John Doe",
      price: 149,
    },
    {
      image: "https://source.unsplash.com/1600x900/?web2",
      title: "React Native Fundamentals",
      author: "Jane Smith",
      price: 199,
    },
    {
      image: "https://source.unsplash.com/1600x900/?computer2",
      title: "Data Structures and Algorithms",
      author: "Bob Johnson",
      price: 299,
    },
  ];

  return (
    <Container maxWidth="xl">
    <Box sx={{ flexGrow: 1 }}>
      <Typography margin={"4rem"} align="center" variant="h4" gutterBottom>
        Top Trending Courses
      </Typography>
      <Box sx={{ overflowX: "auto", mb: 2 }}>
        <Grid container spacing={2}>
          {courses.map((course) => (
            <Grid item key={course.title} xs={12} sm={6} md={4}>
              <CourseCard {...course} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
    </Container>
  );
};

export default TopTrendingCourses;
