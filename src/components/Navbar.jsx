import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '../material-ui-files/ColorModeIconDropdown';
import AdityaNavbarLogo from '../assets/AdityaNavbarLogo.png';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

const navbarVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const navLinksContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const navLinkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [activeId, setActiveId] = React.useState('hero');

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // Fixed: handleScroll is now inside the component so toggleDrawer is in scope
  const handleScroll = (id) => () => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false); // close drawer on mobile
  };

  // Active link tracking via IntersectionObserver
  React.useEffect(() => {
    const observers = [];

    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <motion.div
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1100 }}
    >
      <AppBar
        position="static"
        enableColorOnDark
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 'calc(var(--template-frame-height, 0px) + 28px)',
        }}
      >
        <Container maxWidth="lg">
          <StyledToolbar variant="dense" disableGutters>

            {/* Logo + Desktop Nav Links */}
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
              <img src={AdityaNavbarLogo} width={90} height={50} alt="Aditya Logo" />

              <motion.div
                variants={navLinksContainerVariants}
                initial="hidden"
                animate="visible"
                style={{ display: 'flex', gap: '4px' }}
              >
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
                  {NAV_LINKS.map(({ label, id }) => (
                    <motion.div key={id} variants={navLinkVariants}>
                      <Button
                        variant="text"
                        color="info"
                        size="small"
                        onClick={handleScroll(id)}
                        sx={{
                          position: 'relative',
                          fontWeight: activeId === id ? 700 : 400,
                          color: activeId === id ? 'primary.main' : 'text.primary',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: 2,
                            left: '50%',
                            transform: activeId === id ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                            transformOrigin: 'center',
                            width: '60%',
                            height: '2px',
                            bgcolor: 'primary.main',
                            borderRadius: '2px',
                            transition: 'transform 0.3s ease',
                          },
                          '&:hover::after': {
                            transform: 'translateX(-50%) scaleX(1)',
                          },
                        }}
                      >
                        {label}
                      </Button>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Box>

            {/* Desktop Right Side */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.3 }}
              >
                <Button
                  component="a"
                  href="https://www.linkedin.com/in/adityak01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  variant="contained"
                  size="small"
                >
                  Let's Connect
                </Button>
              </motion.div>
              <ColorModeIconDropdown />
            </Box>

            {/* Mobile: Color toggle + Hamburger */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
              <ColorModeIconDropdown size="medium" />
              <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="top"
                open={open}
                onClose={toggleDrawer(false)}
                PaperProps={{
                  sx: { top: 'var(--template-frame-height, 0px)' },
                }}
              >
                <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={toggleDrawer(false)}>
                      <CloseRoundedIcon />
                    </IconButton>
                  </Box>

                  {NAV_LINKS.map(({ label, id }) => (
                    <MenuItem
                      key={id}
                      sx={{
                        justifyContent: 'center',
                        textAlign: 'center',
                        fontWeight: activeId === id ? 700 : 400,
                        color: activeId === id ? 'primary.main' : 'inherit',
                      }}
                      onClick={handleScroll(id)}
                    >
                      {label}
                    </MenuItem>
                  ))}

                  <Divider sx={{ my: 3 }} />
                  <MenuItem>
                    <Button
                      component="a"
                      href="https://www.linkedin.com/in/adityak01/"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary"
                      variant="contained"
                      fullWidth
                    >
                      Let's Connect
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>

          </StyledToolbar>
        </Container>
      </AppBar>
    </motion.div>
  );
}