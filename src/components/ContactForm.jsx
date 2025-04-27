import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const webAppUrl = "https://script.google.com/macros/s/AKfycbxb6DAt3s1CrZlTVdUmKMhl-NgvcY8CinFQx-FKGcOzHx_I4X0dl2HF5JV_CJRX6TmFNw/exec";
  
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  
    // Convert formData into URL-encoded format
    const urlEncodedData = new URLSearchParams(formData).toString();
    console.log("urlEncodedData", urlEncodedData);
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlEncodedData,  // Sending data in URL-encoded format
      redirect: "follow",
    };
  
    fetch(webAppUrl, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((result) => {
        console.log("Success:", result);
        setFormData({ name: "", email: "", message: "" });  // Clear the form
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error submitting your message.");
      });
  };
  
  

  return (
    <Paper
      sx={{
        maxWidth: 600,
        margin: "auto",
        padding: 4,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" color="text.primary" fontWeight="bold" align="center">
          Contact Me
        </Typography>

        <TextField
          label="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
          sx={{
            borderRadius: 2,
            pt: 1,
          }}
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
          sx={{
            borderRadius: 2,
            pt: 1,
          }}
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
          sx={{
            borderRadius: 2,
            pt: 1,
          }}
        />
        <Button
          type="submit"
          sx={{
            padding: "1rem",
            fontWeight: "bold",
            borderRadius: 2,
            boxShadow: 2,
            mt: 2,
            backgroundColor: "primary.main",
            color: "white",
            border: "2px solid transparent",
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
          Send Message
        </Button>
      </Box>
    </Paper>
  );
};

export default ContactForm;
