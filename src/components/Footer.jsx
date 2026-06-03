// Footer.jsx

import { Box, Typography, Container, Link, Divider } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import { motion } from "framer-motion";

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/adityak01/",
    icon: <LinkedInIcon fontSize="small" />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/adityakaushik01",
    icon: <GitHubIcon fontSize="small" />,
    label: "GitHub",
  },
  {
    href: "https://x.com/adityakaushik78",
    icon: <XIcon fontSize="small" />,
    label: "X",
  },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <Divider />
      <Container
        sx={{
          py: 4,
          mt: 2,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        {/* Left — Name + Copyright */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="body2" color="text.secondary">
            Designed and built by{" "}
            <Link
              href="https://www.linkedin.com/in/adityak01/"
              target="_blank"
              rel="noopener noreferrer"
              color="primary.main"
              sx={{ textDecoration: "none", fontWeight: "bold" }}
            >
              Aditya Kaushik
            </Link>
          </Typography>
          <Typography variant="caption" color="text.disabled">
            © {new Date().getFullYear()} — All rights reserved.
          </Typography>
        </Box>

        {/* Center — Social Icons */}
        <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
          {SOCIAL_LINKS.map(({ href, icon, label }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Box
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  border: "1.5px solid",
                  borderColor: "divider",
                  color: "text.secondary",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    borderColor: "primary.main",
                    color: "primary.main",
                  },
                }}
              >
                {icon}
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* Right — Scroll to top */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Box
            onClick={scrollToTop}
            aria-label="Scroll to top"
            sx={{
              backgroundColor: "primary.main",
              cursor: "pointer",
              color: "white",
              border: "2px solid transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              width: 40,
              height: 40,
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "transparent",
                color: "primary.main",
                border: "2px solid",
                borderColor: "primary.main",
                boxShadow: 3,
              },
            }}
          >
            <ArrowUpward />
          </Box>
        </motion.div>

      </Container>
    </motion.div>
  );
};

export default Footer;