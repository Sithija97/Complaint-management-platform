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
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { changeReportStatus } from "../store/reports/reportSlice";

export const ChangeReportStatus = () => {
  const dispatch = useAppDispatch();

  const selectedReportRequestId = useAppSelector(
    (state: RootState) => state.policeReports.selectedReportRequestId
  );

  const initialState = {
    reportId: selectedReportRequestId || 0,
    status: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      id: Number(formData.reportId),
      status: Number(formData.status),
    };
    console.log(data);
    dispatch(changeReportStatus(data));
    setFormData(initialState);
  };

  return (
    <BoxContainer>
      <Container>
        <Typography sx={{ mt: 12, mb: 5 }} variant="h5" gutterBottom>
          Change Report Request Status
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid sx={{ mt: 1 }} container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <TextField
                  required
                  id="reportId"
                  name="reportId"
                  label="Report Id"
                  fullWidth
                  value={formData.reportId}
                  onChange={handleInputChange}
                />
              </FormControl>
            </Grid>
          </Grid>

          <Grid sx={{ mt: 1 }} container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel id="status">Status</InputLabel>
                <Select
                  labelId="status"
                  id="status"
                  name="status"
                  label="Status"
                  value={formData.status}
                  onChange={handleInputChange}
                >
                  <MenuItem value={1}>Pending</MenuItem>
                  <MenuItem value={2}>In Progress</MenuItem>
                  <MenuItem value={3}>Done</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Button sx={{ mt: 3, mb: 2 }} variant="contained" type="submit">
            Change Status
          </Button>
        </form>
      </Container>
    </BoxContainer>
  );
};
