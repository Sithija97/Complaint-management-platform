import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { BoxContainer } from "../components";

export const CreateComplaint = () => {
  return (
    <BoxContainer>
      <Container>
        <Typography sx={{ mt: 12, mb: 5 }} variant="h5" gutterBottom>
          Add Complaint
        </Typography>

        <Grid sx={{ mt: 1 }} container spacing={2}>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              required
              id="Title"
              name="Title"
              label="Title"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select label="Category">
                <MenuItem value={10}>1</MenuItem>
                <MenuItem value={20}>2</MenuItem>
                <MenuItem value={30}>3</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Polica Station
              </InputLabel>
              <Select label="Polica Station">
                <MenuItem value={10}>Maharagama</MenuItem>
                <MenuItem value={20}>Borella</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid sx={{ mt: 1 }} container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              id="Complaint"
              name="Complaint"
              label="Complaint"
              multiline
              rows={12}
              fullWidth
            />
          </Grid>
        </Grid>

        <Button
          sx={{ mt: 3, mb: 2 }}
          variant="contained"
          type="submit"
          //   onClick={handleSubmit}
        >
          Save
        </Button>
      </Container>
    </BoxContainer>
  );
};
