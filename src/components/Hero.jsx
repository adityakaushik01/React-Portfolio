import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const socialIconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/adityak01/",
    icon: <LinkedInIcon />,
    label: "LinkedIn",
  },
  {
    href: "https://x.com/adityakaushik78",
    icon: <XIcon />,
    label: "X (Twitter)",
  },
  {
    href: "https://github.com/adityakaushik01",
    icon: <GitHubIcon />,
    label: "GitHub",
  },
];

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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Stack
            spacing={2}
            useFlexGap
            sx={{ alignItems: "center", width: { xs: "100%", sm: "70%" } }}
          >
            {/* Greeting + Name */}
            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  fontSize: "clamp(2rem, 8vw, 3rem)",
                  textAlign: "center",
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
            </motion.div>

            {/* Updated tagline — matches resume positioning */}
            <motion.div variants={itemVariants}>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "text.secondary",
                  width: { sm: "100%", md: "80%" },
                  mx: "auto",
                  fontSize: "1.05rem",
                  lineHeight: 1.6,
                }}
              >
                Full-Stack Developer building AI-powered systems — from
                serverless backends to LLM-integrated product features.
              </Typography>
            </motion.div>

            {/* Stack line */}
            <motion.div variants={itemVariants}>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "text.secondary",
                  width: { sm: "100%", md: "80%" },
                  fontSize: "0.875rem",
                  mx: "auto",
                  letterSpacing: "0.05em",
                  opacity: 0.75,
                }}
              >
                React · Node.js · AWS Lambda · MongoDB · OpenAI · Gemini
              </Typography>
            </motion.div>

            {/* Location */}
            <motion.div variants={itemVariants}>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "text.secondary",
                  fontSize: "0.875rem",
                }}
              >
                📍 Noida, Uttar Pradesh, India
              </Typography>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: 2,
                  mt: 1,
                }}
              >
                <Button
                  component="a"
                  href="https://www.linkedin.com/in/adityak01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  color="primary"
                  size="medium"
                  sx={{
                    px: 3,
                    fontWeight: 600,
                    boxShadow: 2,
                    transition: "all 0.3s ease",
                    "&:hover": { transform: "translateY(-2px)", boxShadow: 4 },
                  }}
                >
                  Let's Connect
                </Button>

                <Button
                  component="a"
                  href="https://docs.google.com/document/d/1FH5agFk6-yGcnOXWbWjJCDqeskblutt6uBQ2Y4cfbFQ/edit?tab=t.0"
                  download
                  variant="outlined"
                  target="_blank"
                  color="primary"
                  size="medium"
                  startIcon={<FileDownloadIcon />}
                  sx={{
                    px: 3,
                    fontWeight: 600,
                    transition: "all 0.3s ease",
                    "&:hover": { transform: "translateY(-2px)", boxShadow: 2 },
                  }}
                >
                  Download Resume
                </Button>
              </Box>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={itemVariants}>
              <motion.div
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
                  },
                }}
                initial="hidden"
                animate="visible"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                {SOCIAL_LINKS.map(({ href, icon, label }) => (
                  <motion.div
                    key={label}
                    variants={socialIconVariants}
                    whileHover={{ scale: 1.15, rotate: 5 }}
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
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        border: "2px solid",
                        borderColor: "primary.main",
                        color: "primary.main",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                          backgroundColor: "primary.main",
                          color: "#FFF",
                        },
                      }}
                    >
                      {icon}
                    </Box>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}