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
import { CustomDatePicker } from "../components/customDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { formatDate } from "../utils/formatDate";
import { createFine, getAllFines } from "../store/fines/fineSlice";
import { IFineData } from "../models";

interface IProps {
  onCloseDrawer: () => void;
}

export const CreateFine = ({ onCloseDrawer }: IProps) => {
  const dispatch = useAppDispatch();

  const initialState = {
    title: "",
    category: 1,
    description: "",
    issueDate: "",
    expireDate: "",
    amount: 0,
    userId: 1,
    statusId: 1,
    tax: 0,
    otherCharges: 0,
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
    const {
      title,
      category,
      description,
      issueDate,
      expireDate,
      amount,
      userId,
      statusId,
      tax,
      otherCharges,
    } = formData;
    const data: IFineData = {
      title,
      category: Number(category),
      description,
      issuedDate: formatDate(issueDate),
      endDate: formatDate(expireDate),
      amount: Number(amount),
      userId: Number(userId),
      statusId: Number(statusId),
      tax: Number(tax),
      otherCharges: Number(otherCharges),
    };
    console.log(data);
    dispatch(createFine(data));
    setFormData(initialState);
    dispatch(getAllFines());
    onCloseDrawer();
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
                id="title"
                name="title"
                label="Title"
                fullWidth
                value={formData.title}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  label="Category"
                  name="category"
                  value={formData.category}
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
                  <MenuItem value={1}>User 1</MenuItem>
                  <MenuItem value={2}>User 2</MenuItem>
                  <MenuItem value={3}>User 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                required
                id="amount"
                name="amount"
                label="Amount"
                type="number"
                fullWidth
                value={formData.amount}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                required
                id="tax"
                name="tax"
                label="Tax"
                type="number"
                fullWidth
                value={formData.tax}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                required
                id="otherCharges"
                name="otherCharges"
                label="OtherAmounts"
                type="number"
                fullWidth
                value={formData.otherCharges}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl fullWidth>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <CustomDatePicker
                    name="issueDate"
                    label="Issued Date"
                    value={formData.issueDate}
                    onChange={handleInputChange}
                  />
                </LocalizationProvider>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl fullWidth>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <CustomDatePicker
                    name="expireDate"
                    label="Expire Date"
                    value={formData.expireDate}
                    onChange={handleInputChange}
                  />
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
                value={formData.description}
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
