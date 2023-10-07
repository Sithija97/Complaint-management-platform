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
import { useAppDispatch } from "../store/store";
import { createComplaints } from "../store/complaints/complaintsSlice";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const CreateFine = () => {
  const dispatch = useAppDispatch();

  const initialState = {
    Title: "",
    Category: 1,
    statusId: 1,
    Description: "",
    userId: 0,
    Amount: 0,
    Tax: 0,
    OtherAmounts: 0,
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
    console.log(formData);
    const data = {
      title: formData.Title,
      description: formData.Description,
      category: Number(formData.Category),
      statusId: Number(formData.statusId),
    };
    // dispatch(createComplaints(data)); // IFineData model created
    setFormData(initialState);
  };

  return (
    <BoxContainer>
      <Container>
        <Typography sx={{ mt: 12, mb: 5 }} variant="h5" gutterBottom>
          Add Fine
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid sx={{ mt: 1 }} container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                required
                id="Title"
                name="Title"
                label="Title"
                fullWidth
                value={formData.Title}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  label="Category"
                  name="Category"
                  value={formData.Category}
                  onChange={handleInputChange}
                >
                  <MenuItem value={1}>Category 1</MenuItem>
                  <MenuItem value={2}>Category 2</MenuItem>
                  <MenuItem value={3}>Category 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  label="Status"
                  name="statusId"
                  value={formData.statusId}
                  onChange={handleInputChange}
                >
                  <MenuItem value={1}>Pending</MenuItem>
                  <MenuItem value={2}>Inprogress</MenuItem>
                  <MenuItem value={3}>Done</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">User</InputLabel>
                <Select
                  label="User"
                  name="userId"
                  value={formData.userId}
                  onChange={handleInputChange}
                >
                  <MenuItem value={1}>Pending</MenuItem>
                  <MenuItem value={2}>Inprogress</MenuItem>
                  <MenuItem value={3}>Done</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                required
                id="Amount"
                name="Amount"
                label="Amount"
                type="number"
                fullWidth
                value={formData.Amount}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                required
                id="Tax"
                name="Tax"
                label="Tax"
                type="number"
                fullWidth
                value={formData.Tax}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                required
                id="OtherAmounts"
                name="OtherAmounts"
                label="OtherAmounts"
                type="number"
                fullWidth
                value={formData.OtherAmounts}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl fullWidth>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Issued Date" />
                  </DemoContainer>
                </LocalizationProvider>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl fullWidth>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Expire Date" />
                  </DemoContainer>
                </LocalizationProvider>
              </FormControl>
            </Grid>
          </Grid>
          <Grid sx={{ mt: 1 }} container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                id="description"
                name="description"
                label="Description"
                multiline
                rows={12}
                fullWidth
                value={formData.Description}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>

          <Button sx={{ mt: 3, mb: 2 }} variant="contained" type="submit">
            Save
          </Button>
        </form>
      </Container>
    </BoxContainer>
  );
};
