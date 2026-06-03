import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import MuiChip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";

import DeveloperImageLight from "../assets/DeveloperImageLight.jpg";
import DeveloperImageDark from "../assets/DeveloperImageDark.jpg";
import WhyWorkWithMeLight from "../assets/WhyWorkWithMeLight.jpg";
import WhyWorkWithMeDark from "../assets/WhyWorkWithMeDrak.jpg";
import FunFactLight from "../assets/FunFactLight.jpg";
import FunFactDark from "../assets/FunFactDark.jpg";

import PersonIcon from "@mui/icons-material/Person";
import LaptopIcon from "@mui/icons-material/Laptop";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

// ─── Content ────────────────────────────────────────────────────────────────

const items = [
  {
    icon: <PersonIcon />,
    title: "Who am I?",
    description:
      "A Full-Stack Developer with 2+ years shipping production platforms across fintech, healthcare, and travel.",
    imageLight: `url(${DeveloperImageLight})`,
    imageDark: `url(${DeveloperImageDark})`,
    paragraph:
      "I'm a Full-Stack Developer based in Noida with 2+ years of experience building and deploying production-grade platforms. My core stack is React.js, Node.js, AWS Lambda, and MongoDB, with a strong focus on AI integration — Google Gemini, OpenAI API, and ElevenLabs voice agents. I've delivered 3 end-to-end platforms across different domains, integrating 10+ third-party services including Stripe, Expedia, Signzy, and NetSuite. I care about writing clean, maintainable code that solves real business problems.",
  },
  {
    icon: <LaptopIcon />,
    title: "Why Work with Me?",
    description:
      "I take ownership of the full lifecycle — from architecture decisions to deployment and post-launch support.",
    imageLight: `url(${WhyWorkWithMeLight})`,
    imageDark: `url(${WhyWorkWithMeDark})`,
    paragraph:
      "I think in systems, not just features. From serverless pipelines on AWS Lambda to granular RBAC systems and LLM-powered automation, I build solutions that are designed to scale and reduce operational overhead. I've cut manual processing time from hours to minutes, automated webhook pipelines end-to-end, and integrated AI layers that handle repetitive tasks without human intervention. If you need someone who can own a product from architecture to production — that's the work I do.",
  },
  {
    icon: <CameraAltIcon />,
    title: "Fun Fact",
    description:
      "There's more to me than pull requests and deployment pipelines.",
    imageLight: `url(${FunFactLight})`,
    imageDark: `url(${FunFactDark})`,
    paragraph:
      "Outside of engineering, I'm into photography, playing guitar, reading, and writing poetry. I find that working across different creative disciplines sharpens the way I approach problems — whether it's system design or UI decisions. The same attention to detail that goes into composing a photograph goes into architecting a clean API.",
  },
];

// ─── Styled Chip ─────────────────────────────────────────────────────────────

const Chip = styled(MuiChip)(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => selected,
      style: {
        background:
          "linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))",
        color: "hsl(0, 0%, 100%)",
        borderColor: (theme.vars || theme).palette.primary.light,
        "& .MuiChip-label": {
          color: "hsl(0, 0%, 100%)",
        },
        ...theme.applyStyles("dark", {
          borderColor: (theme.vars || theme).palette.primary.dark,
        }),
      },
    },
  ],
}));

// ─── Animation Variants ──────────────────────────────────────────────────────

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const leftPanelVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const buttonItemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: 0.15 },
  },
};

const cardContentVariants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.2 },
  },
};

// ─── Mobile Layout ───────────────────────────────────────────────────────────

function MobileLayout({ selectedItemIndex, handleItemClick, selectedFeature }) {
  if (!items[selectedItemIndex]) return null;

  return (
    <Box sx={{ display: { xs: "block", sm: "none" }, flexDirection: "column", gap: 2 }}>
      <Box sx={{ display: { xs: "flex", sm: "none" }, flexDirection: "column", gap: 2 }}>
        <Box sx={{ display: "flex", gap: 2, overflow: "auto", pb: 1 }}>
          {items.map(({ title }, index) => (
            <Chip
              size="medium"
              key={index}
              label={title}
              onClick={() => handleItemClick(index)}
              selected={selectedItemIndex === index}
            />
          ))}
        </Box>
      </Box>

      <Typography variant="body2" sx={{ color: "text.secondary", mt: 2, mb: 2 }}>
        {selectedFeature.description}
      </Typography>

      <Card variant="outlined">
        <Box
          sx={(theme) => ({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: 280,
            width: "100%",
            backgroundImage: "var(--items-imageLight)",
            ...theme.applyStyles("dark", {
              backgroundImage: "var(--items-imageDark)",
            }),
          })}
          style={
            items[selectedItemIndex]
              ? {
                  "--items-imageLight": items[selectedItemIndex].imageLight,
                  "--items-imageDark": items[selectedItemIndex].imageDark,
                }
              : {}
          }
        />
        <Box sx={{ px: 3, py: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedItemIndex}
              variants={cardContentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "center" }}>
                {selectedFeature.paragraph}
              </Typography>
            </motion.div>
          </AnimatePresence>
        </Box>
      </Card>
    </Box>
  );
}

MobileLayout.propTypes = {
  handleItemClick: PropTypes.func.isRequired,
  selectedFeature: PropTypes.shape({
    description: PropTypes.string.isRequired,
    icon: PropTypes.element,
    imageDark: PropTypes.string.isRequired,
    imageLight: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
  }).isRequired,
  selectedItemIndex: PropTypes.number.isRequired,
};

export { MobileLayout };

// ─── Main Component ──────────────────────────────────────────────────────────

export default function About() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="about" sx={{ py: { xs: 4, sm: 6 } }}>

      {/* Section Header */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Box sx={{ width: { sm: "100%", md: "60%" }, position: "relative", display: "inline-block" }}>
          <Typography
            component="h2"
            variant="h4"
            gutterBottom
            sx={{ color: "text.primary", fontWeight: "bold", position: "relative", display: "inline-block" }}
          >
            About Me
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
          <Typography variant="body1" sx={{ color: "text.secondary", mb: { xs: 2, sm: 4 } }}>
            Full-Stack Developer focused on AI-powered systems, serverless architecture, and end-to-end product delivery.
          </Typography>
        </Box>
      </motion.div>

      {/* Main Content Row */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
          gap: 2,
        }}
      >
        {/* Right: Tab Buttons (desktop) + Mobile Layout */}
        <div>
          <motion.div
            variants={leftPanelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                flexDirection: "column",
                gap: 2,
                height: "100%",
              }}
            >
              {items.map(({ icon, title, description }, index) => (
                <motion.div key={index} variants={buttonItemVariants}>
                  <Box
                    component={Button}
                    onClick={() => handleItemClick(index)}
                    sx={[
                      (theme) => ({
                        p: 2,
                        height: "100%",
                        width: "100%",
                        "&:hover": {
                          backgroundColor: (theme.vars || theme).palette.action.hover,
                        },
                      }),
                      selectedItemIndex === index && {
                        backgroundColor: "action.selected",
                      },
                    ]}
                  >
                    <Box
                      sx={[
                        {
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "left",
                          gap: 1,
                          textAlign: "left",
                          textTransform: "none",
                          color: "text.secondary",
                        },
                        selectedItemIndex === index && {
                          color: "text.primary",
                        },
                      ]}
                    >
                      {icon}
                      <Typography variant="h6">{title}</Typography>
                      <Typography variant="body2">{description}</Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>

          <MobileLayout
            selectedItemIndex={selectedItemIndex}
            handleItemClick={handleItemClick}
            selectedFeature={selectedFeature}
          />
        </div>

        {/* Left: Card (desktop) */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ flex: 1 }}
        >
          <Box
            id="myBox"
            sx={{
              display: { xs: "none", sm: "flex" },
              width: { xs: "100%", md: "100%" },
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Card
              variant="outlined"
              sx={{
                width: "100%",
                borderRadius: 2,
                padding: 5,
                display: { xs: "none", sm: "block" },
                pointerEvents: "none",
              }}
            >
              {/* Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`image-${selectedItemIndex}`}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1, transition: { duration: 0.35 } }}
                  exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.2 } }}
                >
                  <Box
                    sx={(theme) => ({
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      m: "auto",
                      width: "100%",
                      height: 300,
                      backgroundSize: "cover",
                      borderRadius: 4,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundImage: "var(--items-imageLight)",
                      ...theme.applyStyles("dark", {
                        backgroundImage: "var(--items-imageDark)",
                      }),
                    })}
                    style={
                      items[selectedItemIndex]
                        ? {
                            "--items-imageLight": items[selectedItemIndex].imageLight,
                            "--items-imageDark": items[selectedItemIndex].imageDark,
                          }
                        : {}
                    }
                  />
                </motion.div>
              </AnimatePresence>

              {/* Paragraph */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 7,
                  width: "100%",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${selectedItemIndex}`}
                    variants={cardContentVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <Typography
                      variant="body1"
                      sx={{ color: "text.primary", textAlign: "center" }}
                    >
                      {selectedFeature.paragraph}
                    </Typography>
                  </motion.div>
                </AnimatePresence>
              </Box>
            </Card>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
}