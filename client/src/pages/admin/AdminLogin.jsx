import {
    Button,
    Container,
    Paper,
    TextField,
    Typography
  } from "@mui/material";
  import React from "react";
  import { bgGradient } from "../../constants/color";
  
  const AdminLogin = () => {
    return (
      <div
        style={{
          backgroundImage: bgGradient,
        }}
      >
        <Container
          component={"main"}
          maxWidth="xs"
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">Admin Login</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <TextField
                required
                fullWidth
                label="Secret Key"
                type="password"
                margin="normal"
                variant="outlined"
              />
  
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
                fullWidth
              >
                Login
              </Button>
            </form>
          </Paper>
        </Container>
      </div>
    );
  };
  
  export default AdminLogin;
  