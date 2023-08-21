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
import Editor from "../components/editor";

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
          <Editor />
        </Grid>

        <Button sx={{ mt: 3, mb: 2, ms: 3 }} variant="contained">
          Save
        </Button>
      </Container>
    </Box>
  );
};
