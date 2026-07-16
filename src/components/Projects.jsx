import Box from "@mui/material/Box";
import { Container, Typography, Grid, Paper, Chip, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import WorkIcon from '@mui/icons-material/Work';
import FaceIcon from "@mui/icons-material/Face";
import HouseIcon from "@mui/icons-material/House";
import PersonIcon from "@mui/icons-material/Person";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { motion } from "framer-motion";

// ─── Data ────────────────────────────────────────────────────────────────────

const projects = [
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 28, color: "primary.main" }} />,
    title: "Kundali Marg",
    subtitle: "Full-Stack Vedic Astrology Platform",
    description:
      "A production-grade Vedic astrology platform enabling real-time Kundali generation and AI-powered astrological insights, built end-to-end from chart calculation to conversational AI.",
    highlights: [
      "Rendered dynamic North Indian SVG charts with accurate planetary positions — Lagna, Nakshatras, and Whole Sign houses via Swiss Ephemeris.",
      "Integrated Google Gemini AI with persistent conversation history per Kundali and context-aware astrological responses.",
      "Built complete auth system with JWT, bcrypt, and OTP email verification via Brevo with token-based flow and email-threading prevention.",
      "Enforced server-side message limits per user for controlled LLM usage and cost management.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Material UI",
      "Swiss Ephemeris",
      "Google Gemini",
      "MongoDB",
      "JWT",
      "Brevo",
    ],
    githubLink: "https://github.com/adityakaushik01/Kundali-Marg",
    liveLink: "https://kundali-marg.vercel.app/",
  },
  {
    icon: <WorkIcon sx={{ fontSize: 28, color: "primary.main" }} />,
    title: "NextHire",
    subtitle: "AI-powered job search and resume builder platform to streamline your job hunt.",
    description:
      "A production-grade job search platform with AI-driven job matching, ATS-optimized resume building, and application tracking — built end-to-end from authentication to PDF generation.",
    highlights: [
      "Built modular REST API with Express.js and Prisma ORM across auth, jobs, resume, skills, uploads, and applications modules.",
      "Implemented complete auth system with JWT, bcrypt, OTP email verification via Brevo, and magic-link password reset flow.",
      "Integrated AI-powered ATS scoring and job-matching engine to surface relevant opportunities and optimize resume content.",
      "Engineered resume-to-PDF generation pipeline using Puppeteer with support for multiple templates targeting different career profiles.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "JWT",
      "Brevo",
      "Google Gemini AI",
    ],
    githubLink: "",
    liveLink: "https://nexthire-tech.vercel.app/",
  },
  {
  icon: <CameraAltIcon sx={{ fontSize: 28, color: "primary.main" }} />,
  title: "Through The Lens",
  subtitle: "3D Immersive Photography Gallery",
  description:
    "An immersive digital photography exhibition platform that recreates the feeling of walking through a curated art gallery using 3D interactions and smooth animations.",
  highlights: [
    "Built an interactive 3D gallery experience using React Three Fiber and Drei, moving beyond traditional grid-based photo portfolios.",
    "Integrated Cloudinary for optimized image delivery with tag-based API fetching for scalable media management.",
    "Implemented smooth animations and transitions with Framer Motion for a cinematic browsing experience.",
    "Optimized for both mobile and desktop with a responsive UI built on Tailwind CSS and Vite for lightning-fast performance.",
  ],
  technologies: [
    "React.js",
    "Three.js",
    "React Three Fiber",
    "Drei",
    "Framer Motion",
    "Tailwind CSS",
    "Cloudinary",
    "Vite",
  ],
  githubLink: "https://github.com/adityakaushik01/through-the-lens",
  liveLink: "https://through-the-lens.vercel.app/",
},
  {
    icon: <PersonIcon sx={{ fontSize: 28, color: "primary.main" }} />,
    title: "Portfolio",
    subtitle: "Frontend — Personal Project",
    description:
      "A responsive personal portfolio website built with React.js, Material UI, and Tailwind CSS — the very site you're looking at right now.",
    highlights: [
      "Built with React.js, Material UI, and Tailwind CSS for a clean, responsive layout.",
      "Supports light and dark mode with MUI theme toggling.",
      "Optimized for performance across desktops, tablets, and smartphones.",
    ],
    technologies: ["React.js", "Tailwind CSS", "Material UI"],
    githubLink: "https://github.com/adityakaushik01/React-Portfolio",
    liveLink: "https://aditya-kaushik.vercel.io/",
  },
  {
    icon: <FaceIcon sx={{ fontSize: 28, color: "primary.main" }} />,
    title: "Face Detection for Criminal Identification",
    subtitle: "Computer Vision — Academic Project",
    description:
      "Led a team of 4 to build a Python application that matches faces against a criminal records database using real-time camera input and OpenCV-based detection.",
    highlights: [
      "Implemented OpenCV for accurate real-time face detection and recognition.",
      "Designed and managed a SQLite database to store and verify criminal records.",
      "Led end-to-end development from data pipeline to matching logic as team lead.",
    ],
    technologies: ["Python", "SQLite", "OpenCV"],
    githubLink: "https://github.com/adityakaushik01/Criminal-Face-Recognition",
  },
  {
    icon: <HouseIcon sx={{ fontSize: 28, color: "primary.main" }} />,
    title: "Real Estate Landing Page",
    subtitle: "Frontend — Client Project",
    description:
      "Designed and developed a real estate landing page with CRM integration for lead management, optimized for user engagement and search visibility.",
    highlights: [
      "Built a fully responsive layout using HTML, CSS, and JavaScript.",
      "Integrated a CRM system to capture and manage incoming leads.",
      "Optimized page structure and content for improved SEO performance.",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink:
      "https://github.com/adityakaushik01/real-estate-landing-page-theme",
  },
];

// ─── Animation Variants ──────────────────────────────────────────────────────

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 },
  }),
};

const chipContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

// ─── Main Component ──────────────────────────────────────────────────────────

export default function Projects() {
  return (
    <Container id="projects" sx={{ py: 5, mt: 5 }}>

      {/* Section Header */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Box sx={{ position: "relative", display: "inline-block" }}>
          <Typography
            component="h2"
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "bold",
              position: "relative",
              display: "inline-block",
              color: "text.primary",
            }}
          >
            Projects
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
        </Box>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mb: { xs: 2, sm: 4 },
            display: "block",
            mt: 1,
          }}
        >
          A mix of production work and personal builds — each one solving a real
          problem.
        </Typography>
      </motion.div>

      {/* Project Cards */}
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              style={{ height: "100%" }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 3.5,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: "divider",
                  transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                  "&:hover": {
                    boxShadow: 8,
                    borderColor: "primary.main",
                  },
                }}
              >
                {/* Icon + GitHub Row */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  {project.icon}

                  <Box sx={{ display: "flex", gap: 1 }}>
                    {/* GitHub Button — shows tooltip if repo is private */}
                    <Tooltip
                      title={
                        !project.githubLink
                          ? "Private repository — check live link for project"
                          : ""
                      }
                      arrow
                      placement="top"
                    >
                      {/* span needed so Tooltip works when inner element is non-interactive */}
                      <span>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Box
                            component={project.githubLink ? "a" : "div"}
                            href={project.githubLink || undefined}
                            target={project.githubLink ? "_blank" : undefined}
                            rel={
                              project.githubLink
                                ? "noopener noreferrer"
                                : undefined
                            }
                            aria-label="GitHub"
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 38,
                              height: 38,
                              borderRadius: "50%",
                              border: "2px solid",
                              borderColor: project.githubLink
                                ? "primary.main"
                                : "action.disabled",
                              color: project.githubLink
                                ? "primary.main"
                                : "action.disabled",
                              cursor: project.githubLink
                                ? "pointer"
                                : "not-allowed",
                              transition: "all 0.25s ease",
                              "&:hover": project.githubLink
                                ? {
                                    backgroundColor: "primary.main",
                                    color: "#fff",
                                  }
                                : {},
                            }}
                          >
                            <GitHubIcon fontSize="small" />
                          </Box>
                        </motion.div>
                      </span>
                    </Tooltip>

                    {/* Live Link Button */}
                    {project.liveLink && (
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Box
                          component="a"
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live Demo"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 38,
                            height: 38,
                            borderRadius: "50%",
                            border: "2px solid",
                            borderColor: "primary.main",
                            color: "primary.main",
                            transition: "all 0.25s ease",
                            "&:hover": {
                              backgroundColor: "primary.main",
                              color: "#fff",
                            },
                          }}
                        >
                          <OpenInNewIcon fontSize="small" />
                        </Box>
                      </motion.div>
                    )}
                  </Box>
                </Box>

                {/* Title */}
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {project.title}
                </Typography>

                {/* Subtitle */}
                <Typography
                  variant="caption"
                  color="primary"
                  fontWeight="medium"
                  display="block"
                  sx={{
                    mb: 1.5,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {project.subtitle}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {project.description}
                </Typography>

                {/* Highlights */}
                <Box
                  component="ul"
                  sx={{ m: 0, pl: 2.5, mb: 3, flexGrow: 1 }}
                >
                  {project.highlights.map((point, i) => (
                    <Box component="li" key={i} sx={{ mb: 0.75 }}>
                      <Typography variant="body2" color="text.secondary">
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* Tech Chips */}
                <motion.div
                  variants={chipContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div key={techIndex} variants={chipVariants}>
                        <Chip
                          label={tech}
                          size="small"
                          color="primary"
                          variant="outlined"
                          sx={{
                            borderRadius: "6px",
                            fontWeight: 500,
                            transition: "all 0.25s ease",
                            "&:hover": {
                              backgroundColor: "primary.main",
                              "& .MuiChip-label": { color: "white" },
                            },
                          }}
                        />
                      </motion.div>
                    ))}
                  </Box>
                </motion.div>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}