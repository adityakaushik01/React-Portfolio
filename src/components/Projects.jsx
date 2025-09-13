import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography, Grid, Paper, Chip } from "@mui/material";
import FaceIcon from '@mui/icons-material/Face';
import HouseIcon from '@mui/icons-material/House';
import PersonIcon from '@mui/icons-material/Person';
import GitHubIcon from '@mui/icons-material/GitHub';
import AstroIcon from '@mui/icons-material/AutoAwesome';


const projects = [
  {
    icon: <FaceIcon />,
    title: 'Face Detection For Criminal Identification',
    description:
      'Led a team of 4 in a college project to develop a Python application that matches faces with criminal records. Implemented OpenCV for accurate face detection and created a database to manage and verify records.',
    technologies: ['Python', 'SQLite', 'OpenCV'],
    githubLink: 'https://github.com/adityakaushik01/Criminal-Face-Recognition'
  },
  {
    icon: <HouseIcon />,
    title: 'Real Estate Landing Page',
    description:
      'Designed and developed a Real Estate Landing Page using HTML, CSS, and JavaScript, integrating a CRM system to enhance lead management and optimize user experience for improved engagement and SEO.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    githubLink: 'https://github.com/adityakaushik01/real-estate-landing-page-theme'
  },
  {
    icon: <PersonIcon />,
    title: 'Portfolio Webiste',
    description:
      'Created a responsive portfolio website using React JS, Material UI, and Tailwind CSS, ensuring optimal performance across desktops, tablets, and smartphones.',
    technologies: ['React.js', 'Tailwind CSS', 'Material UI'],
    githubLink: 'https://github.com/adityakaushik01/React-Portfolio'
  },
  {
    icon: <AstroIcon />,
    title: 'Astrology Application',
    description:
      'Developed a React-based astrology application using the Prokerala API to generate kundalis, featuring planetary positions, house details, yogas, and doshas with a clean tab-based UI.',
    technologies: ['React.js', 'Node JS', 'Material UI', 'Tailwind CSS'],
    githubLink: 'https://github.com/adityakaushik01/Kundali-Marg'
  }
];

export default function Projects() {
  return (
    <Container sx={{ py: 5, mt: 5 }}>
      <Box sx={{ position: 'relative', display: 'inline-block' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", position: 'relative', display: 'inline-block' }}>
          Projects
          <Box 
            sx={{ 
              position: 'absolute', 
              bottom: 0, 
              left: 0, 
              width: '100%',
              height: '2px', 
              bgcolor: 'primary.main'
            }} 
          />
        </Typography>
      </Box>
      
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", mb: { xs: 2, sm: 4 }, display: 'block', mt: 1 }}
      >
        Mostly built at 2 AM — and somehow, they work!
      </Typography>
      
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-15px)",
                  boxShadow: 6,
                }
              }}
            >
              <div style={{ color: 'primary.main', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {project.icon}
                <Box
    component="a"
    href={project.githubLink}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: "50%",
      border: "2px solid",
      borderColor: "primary.main",
      color: "primary.main", 
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        backgroundColor: "primary.main",
        color: "#FFF"
      },
    }}
  >
    <GitHubIcon />
  </Box>
              </div>
              <Typography variant="h6" gutterBottom>
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                {project.description}
              </Typography>
              <Grid container spacing={1}>
                {project.technologies.map((tech, techIndex) => (
                  <Grid item key={techIndex}>
                    <Chip 
                      label={tech} 
                      size="small"
                      color="primary" 
                      variant="outlined" 
                      sx={{ 
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "primary.main",
                          "& .MuiChip-label": {
                            color: "white"
                          }
                        }
                      }} 
                    />
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}