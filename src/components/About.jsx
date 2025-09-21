import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import MuiChip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import DeveloperImageLight from "../assets/DeveloperImageLight.jpg";
import DeveloperImageDark from "../assets/DeveloperImageDark.jpg";

import WhyWorkWithMeLight from "../assets/WhyWorkWithMeLight.jpg";
import WhyWorkWithMeDark from "../assets/WhyWorkWithMeDrak.jpg";

import FunFactLight from "../assets/FunFactLight.jpg";
import FunFactDark from "../assets/FunFactDark.jpg";



import PersonIcon from '@mui/icons-material/Person';
import LaptopIcon from '@mui/icons-material/Laptop';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const items = [
  {
    icon: <PersonIcon />,
    title: "Who am I?",
    description:
      "A creative web developer crafting seamless and impactful digital experiences.",
    imageLight: `url(${DeveloperImageLight})`,
    imageDark: `url(${DeveloperImageDark})`,
    paragraph:
      "With approx 2 years of experience in web development, I specialize in React.js, Material UI, MongoDB, and Tailwind CSS. I focus on developing fast, scalable, and user-friendly applications that merge aesthetics with functionality. My goal is to write efficient, maintainable code that ensures smooth performance across all platforms while enhancing the overall user experience.",
  },
  {
    icon: <LaptopIcon />,
    title: "Why Work with Me?",
    description:
      "I build modern, responsive, and high-performing web applications that drive business growth and user engagement.",
    imageLight: `url(${WhyWorkWithMeLight})`,
    imageDark: `url(${WhyWorkWithMeDark})`,
    paragraph:
     "My approach is design-driven and performance-focused, ensuring applications are intuitive, responsive, and highly optimized. Whether it’s frontend development, backend architecture, or full-stack solutions, I deliver seamless experiences that enhance user engagement. With a strong emphasis on clean code, scalability, and problem-solving, I build digital solutions that stand the test of time.",
  },
  {
    icon: <CameraAltIcon />,
    title: "Fun Fact",
    description:
      "A jack of all trades with a passion for creativity beyond just coding!",
    imageLight: `url(${FunFactLight})`,
    imageDark: `url(${FunFactDark})`,
    paragraph:
      "Outside of web development, I consider myself a jack of all trades when it comes to creativity. I have a deep passion for photography, playing guitar, singing, reading books, and writing poetry. These creative outlets sharpen my ability to think differently, fueling my problem-solving skills and enhancing my approach to digital design and development.",
  },
];

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

function MobileLayout({ selectedItemIndex, handleItemClick, selectedFeature }) {
  if (!items[selectedItemIndex]) {
    return null;
  }

  return (
    <Box
      sx={{
        display: { xs: "block", sm: "none" },
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          flexDirection: "column",
          gap: 2,
        }}
      >
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

      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          mt: 2,
          mb: 2,
        }}
      >
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
        <Box
          sx={{
            px: 3,
            py: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              textAlign: "center",
            }}
          >
            {selectedFeature.paragraph}
          </Typography>
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
  }).isRequired,
  selectedItemIndex: PropTypes.number.isRequired,
};

export { MobileLayout };

export default function About() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="about" sx={{ py: { xs: 1, sm: 1 } }}>
    <Box sx={{ width: { sm: "100%", md: "60%" }, position: 'relative', display: 'inline-block' }}>
  <Typography
    component="h2"
    variant="h4"
    gutterBottom
    sx={{ color: "text.primary", fontWeight: 'bold', position: 'relative', display: 'inline-block' }}
  >
    About Me
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
  <Typography
    variant="body1"
    sx={{ color: "text.secondary", mb: { xs: 2, sm: 4 } }}
  >
    Meet the Guy Breaking and Building Things Online. Not Just Another Developer — Probably.
  </Typography>
</Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
          gap: 2,
        }}
      >
        <div>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 2,
              height: "100%",
            }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Box
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={[
                  (theme) => ({
                    p: 2,
                    height: "100%",
                    width: "100%",
                    "&:hover": {
                      backgroundColor: (theme.vars || theme).palette.action
                        .hover,
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
            ))}
          </Box>
          <MobileLayout
            selectedItemIndex={selectedItemIndex}
            handleItemClick={handleItemClick}
            selectedFeature={selectedFeature}
          />
        </div>
        <Box
          id="myBox"
          sx={{
            display: { xs: "none", sm: "flex" },
            width: { xs: "100%", md: "70%" },
            justifyContent: "center",
            alignItems: "center",
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 7,
                width: "100%",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "text.primary",
                  textAlign: "center",
                }}
              >
                {selectedFeature.paragraph}
              </Typography>
            </Box>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
