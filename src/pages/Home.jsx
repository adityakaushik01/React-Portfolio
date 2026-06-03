import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import AppTheme from '../material-ui-files/AppTheme';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


export default function Home(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <GlobalStyles
        styles={{
          html: {
            overflowX: 'hidden',
          },
          body: {
            overflowX: 'hidden',
          },
          '#root': {
            maxWidth: '100%',
            overflowX: 'clip',
          },
        }}
      />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />

    </AppTheme>
  );
}
