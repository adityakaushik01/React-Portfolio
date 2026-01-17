import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
        ...theme.applyStyles("dark", {
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
        }),
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: "center", width: { xs: "100%", sm: "70%" } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              fontSize: "clamp(2rem, 8vw, 3rem)",
            }}
          >
            Hi, I'm&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: "inherit",
                textAlign: "center",
                color: "primary.main",
                ...theme.applyStyles("dark", {
                  color: "primary.light",
                }),
              })}
            >
              Aditya Kaushik 👨‍💻
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              width: { sm: "100%", md: "80%" },
            }}
          >
            Building Scalable, Full-Fledged Web Apps with Modern Technologies.
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              width: { sm: "100%", md: "80%" },
            }}
          >
            Based in Noida, Uttar Pradesh, India
          </Typography>


          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: 2 }}>
  <Box
    component="a"
    href="https://www.linkedin.com/in/adityak01/"
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
    <LinkedInIcon />
  </Box>

  <Box
    component="a"
    href="https://x.com/adityakaushik78"
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
    <XIcon />
  </Box>

  <Box
    component="a"
    href="https://github.com/adityakaushik01"
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
</Box>

        </Stack>
      </Container>
    </Box>
  );
}
