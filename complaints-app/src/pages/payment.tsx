import React, { useState } from "react";
import {
  Card,
  Typography,
  TextField,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
} from "@mui/material";
import { BoxContainer } from "../components";
import { Dashboard } from "../layouts";
import { IPaymentData } from "../models";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { createPayment } from "../store/payments/paymentSlice";

export const Payment = () => {
  const dispatch = useAppDispatch();
  const initialPaymentInfo = {
    title: "",
    description: "",
    cardNumber: "",
    amount: 0,
  };

  const selectedFineId = useAppSelector(
    (state: RootState) => state.fines.selectedFineId
  );
  const [paymentInfo, setPaymentInfo] = useState(initialPaymentInfo);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const paymentData: IPaymentData = {
      title: paymentInfo.title,
      description: paymentInfo.description,
      fineId: selectedFineId || 0,
      amount: Number(paymentInfo.amount),
    };
    console.log(paymentData);
    dispatch(createPayment(paymentData));
    setPaymentInfo(initialPaymentInfo);
  };

  return (
    <Dashboard>
      <BoxContainer>
        <Container maxWidth={"md"} sx={{ mt: 12, mb: 4 }}>
          <Card variant="outlined" sx={{ p: 8 }}>
            <Typography variant="h6" gutterBottom>
              Payment Information
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Title"
                    name="title"
                    variant="outlined"
                    value={paymentInfo.title}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Description"
                    name="description"
                    variant="outlined"
                    value={paymentInfo.description}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Card Number"
                    name="cardNumber"
                    variant="outlined"
                    value={paymentInfo.cardNumber}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Amount"
                    name="amount"
                    variant="outlined"
                    value={paymentInfo.amount}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                {/* <Grid item xs={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Expiry Month</InputLabel>
                    <Select
                      label="Expiry Month"
                      name="expiryMonth"
                      value={paymentInfo.expiryMonth}
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value="01">01 - January</MenuItem>
                    </Select>
                  </FormControl>
                </Grid> */}
                {/* <Grid item xs={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Expiry Year</InputLabel>
                    <Select
                      label="Expiry Year"
                      name="expiryYear"
                      value={paymentInfo.expiryYear}
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value="2023">2023</MenuItem>
                    </Select>
                  </FormControl>
                </Grid> */}
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Submit Payment
              </Button>
            </form>
          </Card>
        </Container>
      </BoxContainer>
    </Dashboard>
  );
};
