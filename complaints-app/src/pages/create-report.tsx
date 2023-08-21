import React, { useState } from "react";
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
import { RichtextEditor } from "../components";

export const CreateReport = () => {
  const [policeReportContent, setPoliceReportContent] = useState("");

  const handleReportContent = () => {
    console.log(policeReportContent);
  };

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
          <RichtextEditor setValue={setPoliceReportContent} />
        </Grid>

        <Button
          sx={{ mt: 3, mb: 2, ms: 3 }}
          variant="contained"
          onClick={handleReportContent}
        >
          Save
        </Button>
      </Container>
    </Box>
  );
};
