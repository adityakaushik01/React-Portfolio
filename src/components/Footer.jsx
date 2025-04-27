import { Box, Typography, Container, Link } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container
      sx={{
        py: 5,
        mt: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="body1">
          Developed with ❤️ by{" "}
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

        <Typography variant="body2">
          Copyright © {new Date().getFullYear()} | All Rights Reserved.
        </Typography>
      </Box>

      <Box
        onClick={scrollToTop}
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
    </Container>
  );
};

export default Footer;
