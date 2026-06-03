import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Container,
   Typography,
   Grid,
   Paper,
   Chip,
   Stack,
} from "@mui/material"
import {
   Timeline,
   TimelineItem,
   TimelineSeparator,
   TimelineConnector,
   TimelineContent,
   TimelineDot,
} from "@mui/lab"
import WorkIcon from "@mui/icons-material/Work"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Box } from "@mui/material"
import { motion } from "framer-motion"

// ─── Data ────────────────────────────────────────────────────────────────────

const experienceData = [
   {
      role: "Software Developer",
      company: "LCNC Technologies Pvt. Ltd.",
      location: "Noida, Uttar Pradesh",
      duration: "March 2024 – Present",
      stack: "React · Node.js · AWS Lambda · MongoDB · Stripe · OpenAI",
      highlights: [
         "Delivered 3 production platforms across fintech, healthcare, and travel — owning end-to-end architecture, integration, and deployment.",
         "Integrated ElevenLabs voice agent with OpenAI API to parse natural language inputs and trigger backend workflows, reducing manual entry by ~50%.",
         "Engineered a granular RBAC system with 20+ roles and row-level data visibility across 3 client platforms.",
         "Built serverless AWS Lambda pipelines automating bulk property updates (1,500+ records), cutting processing time from hours to under 30 minutes.",
         "Integrated Expedia API (100+ daily requests), Stripe payments, NetSuite CRM sync, and Signzy KYC/eSign across multiple platforms.",
      ],
   },
   {
      role: "Web Developer",
      company: "Digital Rubix",
      location: "Noida, Uttar Pradesh",
      duration: "August 2023 – January 2024",
      stack: "HTML · CSS · JavaScript · Bootstrap",
      highlights: [
         "Designed and developed reusable landing page templates used across multiple client projects.",
         "Maintained client web pages ensuring visual consistency and timely delivery across accounts.",
         "Collaborated in a team environment to meet deadlines under high-volume workloads.",
      ],
   },
]

const skills = [
   "React.js",
   "JavaScript (ES6+)",
   "Node.js",
   "Express.js",
   "MongoDB",
   "Tailwind CSS",
   "Material UI",
   "AWS Lambda",
   "REST APIs",
   "Webhooks",
   "JWT",
   "Google Gemini",
   "OpenAI API",
   "ElevenLabs",
   "Prompt Engineering",
   "Stripe",
   "Vercel",
   "Render",
   "Git",
   "Postman",
]

const getStackItems = (stack) => stack.split(/\s+(?:Â·|·)\s+/)

// ─── Animation Variants ──────────────────────────────────────────────────────

const sectionVariants = {
   hidden: { opacity: 0, y: 40 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
   },
}

const timelineItemLeft = {
   hidden: { opacity: 0, x: -50 },
   visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.55, ease: "easeOut" },
   },
}

const timelineItemRight = {
   hidden: { opacity: 0, x: 50 },
   visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.55, ease: "easeOut" },
   },
}

const mobileCardVariants = {
   hidden: { opacity: 0, y: 24 },
   visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut", delay: i * 0.08 },
   }),
}

const skillsContainerVariants = {
   hidden: {},
   visible: {
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
   },
}

const chipVariants = {
   hidden: { opacity: 0, scale: 0.7, y: 10 },
   visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
   },
}

// ─── Section Header ──────────────────────────────────────────────────────────

function SectionHeader({ title, subtitle }) {
   return (
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
                  color: "text.primary",
                  fontWeight: "bold",
                  position: "relative",
                  display: "inline-block",
               }}
            >
               {title}
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
               sx={{ color: "text.secondary", mb: { xs: 2, sm: 4 }, display: "block" }}
            >
               {subtitle}
            </Typography>
         </Box>
      </motion.div>
   )
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function Experience() {
   return (
      <Container id="experience" sx={{ py: 5, mt: 5 }}>
         {/* Experience Header */}
         <SectionHeader
            title="Experience"
            subtitle="2+ years building production systems across fintech, healthcare, and travel."
         />

         {/* Timeline */}
         <Box sx={{ display: { xs: "none", md: "block" } }}>
         <Timeline position="alternate" sx={{ padding: 0 }}>
            {experienceData.map((exp, index) => (
               <TimelineItem key={index}>
                  <TimelineSeparator>
                     <TimelineDot color="primary">
                        <WorkIcon />
                     </TimelineDot>
                     {index !== experienceData.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                     <motion.div
                        variants={index % 2 === 0 ? timelineItemRight : timelineItemLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                     >
                        <Paper
                           elevation={3}
                           sx={{
                              p: 3,
                              transition: "box-shadow 0.3s ease",
                              "&:hover": { boxShadow: 6 },
                           }}
                        >
                           <Typography variant="h6" fontWeight="bold">
                              {exp.role}
                           </Typography>
                           <Typography variant="subtitle1" color="primary" fontWeight="medium">
                              {exp.company}
                           </Typography>
                           <Typography
                              variant="caption"
                              color="text.secondary"
                              display="block"
                              sx={{ mb: 0.5 }}
                           >
                              {exp.duration} &nbsp;·&nbsp; {exp.location}
                           </Typography>
                           <Typography
                              variant="caption"
                              color="text.secondary"
                              display="block"
                              sx={{ mb: 1.5, fontStyle: "italic" }}
                           >
                              {exp.stack}
                           </Typography>
                           <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                              {exp.highlights.map((point, i) => (
                                 <Box component="li" key={i} sx={{ mb: 0.75 }}>
                                    <Typography variant="body2" color="text.secondary">
                                       {point}
                                    </Typography>
                                 </Box>
                              ))}
                           </Box>
                        </Paper>
                     </motion.div>
                  </TimelineContent>
               </TimelineItem>
            ))}
         </Timeline>
         </Box>

         <Stack spacing={2} sx={{ display: { xs: "flex", md: "none" } }}>
            {experienceData.map((exp, index) => (
               <motion.div
                  key={index}
                  variants={mobileCardVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
               >
                  <Paper
                     elevation={2}
                     sx={{
                        p: 2,
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: 2,
                     }}
                  >
                     <Box sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                        <Box
                           sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 38,
                              height: 38,
                              flexShrink: 0,
                              borderRadius: "50%",
                              bgcolor: "primary.main",
                              color: "primary.contrastText",
                           }}
                        >
                           <WorkIcon fontSize="small" />
                        </Box>

                        <Box sx={{ minWidth: 0, flex: 1 }}>
                           <Typography variant="subtitle1" fontWeight="bold" sx={{ lineHeight: 1.25 }}>
                              {exp.role}
                           </Typography>
                           <Typography variant="body2" color="primary" fontWeight="medium">
                              {exp.company}
                           </Typography>
                           <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 0.5 }}>
                              {exp.duration}
                           </Typography>
                           <Typography variant="caption" color="text.secondary" display="block">
                              {exp.location}
                           </Typography>
                        </Box>
                     </Box>

                     <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mt: 2 }}>
                        {getStackItems(exp.stack).map((item) => (
                           <Chip
                              key={item}
                              label={item}
                              size="small"
                              color="primary"
                              variant="outlined"
                              sx={{ borderRadius: "6px" }}
                           />
                        ))}
                     </Box>

                     <Accordion
                        disableGutters
                        elevation={0}
                        sx={{
                           mt: 1.5,
                           bgcolor: "transparent",
                           borderTop: "1px solid",
                           borderColor: "divider",
                           "&::before": { display: "none" },
                        }}
                     >
                        <AccordionSummary
                           expandIcon={<ExpandMoreIcon />}
                           sx={{
                              minHeight: 44,
                              px: 0,
                              "& .MuiAccordionSummary-content": { my: 1 },
                           }}
                        >
                           <Typography variant="body2" fontWeight="medium">
                              Key work
                           </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ px: 0, pt: 0 }}>
                           <Box component="ul" sx={{ m: 0, pl: 2.25 }}>
                              {exp.highlights.map((point, i) => (
                                 <Box component="li" key={i} sx={{ mb: 0.75 }}>
                                    <Typography variant="body2" color="text.secondary">
                                       {point}
                                    </Typography>
                                 </Box>
                              ))}
                           </Box>
                        </AccordionDetails>
                     </Accordion>
                  </Paper>
               </motion.div>
            ))}
         </Stack>

         {/* Skills Header */}
         <Box id="skills" sx={{ mt: 8 }}>
            <SectionHeader
               title="Skills"
               subtitle="Technologies and tools I work with across the full stack."
            />
         </Box>
         {/* Skills — flat chip list */}
         <motion.div
            variants={skillsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
         >
            <Box
               sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1.5,
                  justifyContent: "center",
                  mx: "auto",
                  mt: 1,
               }}
            >
               <Grid container spacing={2} justifyContent="center">
                  {skills.map((skill, index) => (
                     <Grid item key={index}>
                        <motion.div variants={chipVariants}>
                           <Chip
                              label={skill}
                              color="primary"
                              variant="outlined"
                              sx={{
                                 fontSize: "1rem",
                                 px: 2,
                                 py: 1,
                                 transition: "all 0.3s ease",
                                 "&:hover": {
                                    backgroundColor: "primary.main",
                                    color: "primary.main",
                                    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                                    "& .MuiChip-label": {
                                       color: "white",
                                    },
                                 },
                              }}
                           />
                        </motion.div>
                     </Grid>
                  ))}
               </Grid>
            </Box>
         </motion.div>
      </Container>
   )
}
