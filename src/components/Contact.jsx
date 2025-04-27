import { useRef } from "react";
import { Box, Typography, Grid } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ContactForm from "./ContactForm";
import { Container } from "@mui/system";

const Contact = () => {
  const contactRef = useRef(null);

  return (
    <Container id="contact" sx={{ py: 5, mt: 5 }} ref={contactRef}>
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
          Get In Touch
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
          Interested in working together or have any questions? Feel free to
          fill the form or reach out to me via email.
        </Typography>
      </Box>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: 2 }}>
            <Box display="flex" alignItems="center" gap={2} sx={{ mb: 5 }} id="email">
              <Box display="flex" alignItems="center" justifyContent="center" sx={{ padding: 2, backgroundColor: "primary.main", borderRadius: "50%" }}>
                <MailIcon sx={{ fontSize: 20 }} />
              </Box>
              <Box>
                <Typography variant="subtitle1" fontWeight="medium">Email</Typography>
                <a href="mailto:kaditya737@gmail.com" style={{ color: "primary.main", textDecoration: "underline" }}>
                  kaditya737@gmail.com
                </a>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" gap={2} sx={{ mb: 5 }} id="linkedin">
              <Box display="flex" alignItems="center" justifyContent="center" sx={{ padding: 2, backgroundColor: "primary.main", borderRadius: "50%" }}>
                <LinkedInIcon sx={{ fontSize: 20 }} />
              </Box>
              <Box>
                <Typography variant="subtitle1" fontWeight="medium">LinkedIn</Typography>
                <a href="https://www.linkedin.com/in/adityak01/" style={{ color: "primary.main", textDecoration: "underline" }}>
                  linkedin.com/in/adityak01/
                </a>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" gap={2} sx={{ mb: 5 }} id="availablefor">
              <Box display="flex" alignItems="center" justifyContent="center" sx={{ padding: 2, backgroundColor: "primary.main", borderRadius: "50%" }}>
                <FavoriteIcon sx={{ fontSize: 20 }} />
              </Box>
              <Box>
                <Typography variant="subtitle1" fontWeight="medium">Available For</Typography>
                <Typography variant="body2" color="text.secondary">Freelance Projects, Full-time Positions</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
