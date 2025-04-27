import React from "react";
import { Container, Typography, Grid, Paper, Chip } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import WorkIcon from "@mui/icons-material/Work";
import { Box } from "@mui/material";

const experienceData = [
  {
    role: "UI/UX Developer",
    company: "LCNC Technologies Pvt. Ltd.",
    duration: "March 2023 - Present",
  },
  {
    role: "Web Developer",
    company: "Digital Rubix",
    duration: "August 2023 - January 2023",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "Tailwind CSS",
  "React JS",
  "Node.js",
  "Material UI",
  "AWS Lambda",
  "MongoDB",
];

export default function Experience() {
  return (
    <Container sx={{ py: 5, mt: 5 }}>
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          position: "relative",
          display: "inline-block",
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{
            color: "text.primary",
            fontWeight: "bold",
            position: "relative",
            display: "inline-block",
          }}
        >
          Experience
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "2px",
              bgcolor: "primary.main",
            }}
          />
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", mb: { xs: 2, sm: 4 } }}
        >
          Been there, coded that — broke stuff, fixed it, called it experience.
        </Typography>
      </Box>

      <Timeline position="alternate" id="123" sx={{ padding: 0 }}>
        {experienceData.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <WorkIcon />
              </TimelineDot>
              {index !== experienceData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-15px)",
                    boxShadow: 6,
                  },
                }}
              >
                <Typography variant="h6">{exp.role}</Typography>
                <Typography variant="subtitle1" color="primary">
                  {exp.company}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {exp.duration}
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          position: "relative",
          display: "inline-block",
          mt: 5,
          py: 5,
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{
            color: "text.primary",
            fontWeight: "bold",
            position: "relative",
            display: "inline-block",
          }}
        >
          Skills
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "2px",
              bgcolor: "primary.main",
            }}
          />
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", mb: { xs: 2, sm: 4 } }}
        >
         Powered by coffee, fueled by Stack Overflow, and dangerously good at
         fixing my own mistakes.
        </Typography>
      </Box>












      <Grid container spacing={2} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <Chip
              label={skill}
              color="primary"
              variant="outlined"
              sx={{
                fontSize: "1rem",
                px: 2,
                py: 1,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "primary.main",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                  "& .MuiChip-label": {
                    color: "white",
                  },
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
