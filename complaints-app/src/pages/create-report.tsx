import React from "react";
import { Dashboard } from "../layouts";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const CreateReport = () => {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "white",
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Container>
        <Typography sx={{ mt: 12, mb: 5 }} variant="h5" gutterBottom>
          Create Report
        </Typography>

        <Grid sx={{ mt: 1 }} container spacing={2}>
          <Grid item xs={12} sm={4} md={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Title</InputLabel>
              <Select label="Title">
                <MenuItem value={10}>Mr</MenuItem>
                <MenuItem value={20}>Mrs</MenuItem>
                <MenuItem value={30}>Ms</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              required
              id="fullName"
              name="fullName"
              label="Full Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select label="Gender">
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid sx={{ mt: 1 }} container spacing={2}>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              required
              id="address"
              name="address"
              label="Address"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              required
              id="mobile"
              name="mobile"
              label="Mobile No"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                slotProps={{ textField: { fullWidth: true } }}
                label="Date Of Birth"
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 2, mb: 2 }} />

        <Button sx={{ mt: 3, mb: 2, ms: 3 }} variant="contained">
          Save
        </Button>
      </Container>
    </Box>
  );
};
