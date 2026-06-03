// ContactForm.jsx

import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  CircularProgress,
  Alert,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxNsb6g6DZ_vHxHyN75vLXcMbrDVzf4a9Nva1IZETJIEiehh53SDn-ir47CbcCZ1XH8/exec";

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    height: "auto",
  },
  "& .MuiOutlinedInput-input": {
    py: 0.25,
  },
};

const messageFieldSx = {
  "& .MuiOutlinedInput-root": {
    alignItems: "flex-start",
    height: "auto",
    minHeight: 140,
    p: 1.5,
  },
  "& .MuiOutlinedInput-input": {
    lineHeight: 1.6,
    p: 0,
  },
};

function submitToGoogleSheets(payload) {
  return new Promise((resolve, reject) => {
    if (!WEB_APP_URL) {
      reject(new Error("Missing Google Sheets web app URL"));
      return;
    }

    const iframeName = `google-sheets-submit-${Date.now()}`;
    const iframe = document.createElement("iframe");
    const form = document.createElement("form");

    const finish = () => {
      resolve();

      iframe.remove();
      form.remove();
    };

    iframe.name = iframeName;
    iframe.style.display = "none";

    form.method = "POST";
    form.action = WEB_APP_URL;
    form.target = iframeName;
    form.style.display = "none";

    Object.entries(payload).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(iframe);
    document.body.appendChild(form);
    form.submit();

    window.setTimeout(finish, 2500);
  });
}

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      submittedAt: new Date().toISOString(),
      source: window.location.href,
    };

    try {
      await submitToGoogleSheets(payload);

      setFormData(initialFormData);
      setStatus("success");
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        padding: { xs: 3, sm: 4 },
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
      >
        <Typography variant="h6" fontWeight="bold" color="text.primary">
          Send a Message
        </Typography>

        {/* Success / Error feedback */}
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Alert severity="success" onClose={() => setStatus("idle")}>
              Message sent successfully. I'll get back to you soon.
            </Alert>
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Alert severity="error" onClose={() => setStatus("idle")}>
              Something went wrong. Please try again or email me directly.
            </Alert>
          </motion.div>
        )}

        <TextField
          label="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
          disabled={status === "loading"}
          sx={fieldSx}
        />
        <TextField
          label="Your Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
          disabled={status === "loading"}
          sx={fieldSx}
        />
        <TextField
          label="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
          multiline
          minRows={5}
          disabled={status === "loading"}
          sx={messageFieldSx}
        />

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="submit"
            fullWidth
            disabled={status === "loading"}
            endIcon={
              status === "loading" ? (
                <CircularProgress size={18} color="inherit" />
              ) : (
                <SendIcon />
              )
            }
            sx={{
              py: 1.4,
              fontWeight: "bold",
              borderRadius: 2,
              backgroundColor: "primary.main",
              color: "white",
              border: "2px solid transparent",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "transparent",
                color: "primary.main",
                border: "2px solid",
                borderColor: "primary.main",
              },
              "&:disabled": {
                opacity: 0.7,
                cursor: "not-allowed",
              },
            }}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </Button>
        </motion.div>
      </Box>
    </Paper>
  );
};

export default ContactForm;
