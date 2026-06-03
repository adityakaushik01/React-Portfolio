// Contact.jsx

import { Box, Typography, Grid } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WorkIcon from "@mui/icons-material/Work";
import ContactForm from "./ContactForm";
import { Container } from "@mui/system";
import { motion } from "framer-motion";

// ─── Animation Variants ──────────────────────────────────────────────────────

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const leftColVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const infoItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const rightColVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: 0.2 },
  },
};

// ─── Contact Info Items ──────────────────────────────────────────────────────

const contactItems = [
  {
    id: "email",
    icon: <MailIcon sx={{ fontSize: 20, color: "white" }} />,
    label: "Email",
    display: "kaditya737@gmail.com",
    href: "mailto:kaditya737@gmail.com",
    isLink: true,
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon sx={{ fontSize: 20, color: "white" }} />,
    label: "LinkedIn",
    display: "linkedin.com/in/adityak01",
    href: "https://www.linkedin.com/in/adityak01/",
    isLink: true,
  },
  {
    id: "github",
    icon: <GitHubIcon sx={{ fontSize: 20, color: "white" }} />,
    label: "GitHub",
    display: "github.com/adityakaushik01",
    href: "https://github.com/adityakaushik01",
    isLink: true,
  },
  {
    id: "availablefor",
    icon: <WorkIcon sx={{ fontSize: 20, color: "white" }} />,
    label: "Available For",
    display: "Freelance Projects · Full-time Positions",
    isLink: false,
  },
];

// ─── Main Component ──────────────────────────────────────────────────────────

const Contact = () => {
  return (
    <Container id="contact" sx={{ py: 5, mt: 5 }}>

      {/* Section Header */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
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
            Open to full-time roles and freelance projects. Fill in the form or
            reach out directly — I typically respond within 24 hours.
          </Typography>
        </Box>
      </motion.div>

      <Grid container spacing={4} alignItems="flex-start">

        {/* Left — Contact Info */}
        <Grid item xs={12} md={5}>
          <motion.div
            variants={leftColVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3, pt: 1 }}>
              {contactItems.map((item) => (
                <motion.div key={item.id} variants={infoItemVariants}>
                  <Box display="flex" alignItems="center" gap={2}>
                    {/* Icon bubble */}
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        minWidth: 44,
                        minHeight: 44,
                        backgroundColor: "primary.main",
                        borderRadius: "50%",
                      }}
                    >
                      {item.icon}
                    </Box>

                    {/* Label + Value */}
                    <Box>
                      <Typography
                        variant="subtitle2"
                        fontWeight="bold"
                        color="text.primary"
                      >
                        {item.label}
                      </Typography>
                      {item.isLink ? (
                        <Typography
                          component="a"
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="body2"
                          sx={{
                            color: "primary.main",
                            textDecoration: "none",
                            "&:hover": { textDecoration: "underline" },
                          }}
                        >
                          {item.display}
                        </Typography>
                      ) : (
                        <Typography variant="body2" color="text.secondary">
                          {item.display}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Grid>

        {/* Right — Contact Form */}
        <Grid item xs={12} md={7}>
          <motion.div
            variants={rightColVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </Grid>

      </Grid>
    </Container>
  );
};

export default Contact;