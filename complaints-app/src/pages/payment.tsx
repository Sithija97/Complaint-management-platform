import React, { useState } from "react";
import {
  Card,
  CardContent,
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

interface PaymentInfo {
  name: string;
  address: string;
  cardNumber: string;
  cvv: string;
  expiryMonth: string;
  expiryYear: string;
}

export const Payment: React.FC = () => {
  const initialPaymentInfo: PaymentInfo = {
    name: "",
    address: "",
    cardNumber: "",
    cvv: "",
    expiryMonth: "",
    expiryYear: "",
  };

  const [paymentInfo, setPaymentInfo] =
    useState<PaymentInfo>(initialPaymentInfo);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(paymentInfo); // You can handle the payment data submission here.
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
                    label="Name"
                    name="name"
                    variant="outlined"
                    value={paymentInfo.name}
                    // onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Address"
                    name="address"
                    variant="outlined"
                    value={paymentInfo.address}
                    // onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Card Number"
                    name="cardNumber"
                    variant="outlined"
                    value={paymentInfo.cardNumber}
                    // onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="CVV"
                    name="cvv"
                    variant="outlined"
                    value={paymentInfo.cvv}
                    // onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Expiry Month</InputLabel>
                    <Select
                      label="Expiry Month"
                      name="expiryMonth"
                      value={paymentInfo.expiryMonth}
                      //   onChange={handleChange}
                      required
                    >
                      <MenuItem value="01">01 - January</MenuItem>
                      {/* Add more months */}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Expiry Year</InputLabel>
                    <Select
                      label="Expiry Year"
                      name="expiryYear"
                      value={paymentInfo.expiryYear}
                      //   onChange={handleChange}
                      required
                    >
                      <MenuItem value="2023">2023</MenuItem>
                      {/* Add more years */}
                    </Select>
                  </FormControl>
                </Grid>
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
