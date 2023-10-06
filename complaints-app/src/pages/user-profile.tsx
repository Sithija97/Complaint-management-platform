import React, { useState } from "react";
import {
  Avatar,
  Typography,
  Grid,
  Paper,
  Toolbar,
  Container,
  Stack,
  Card,
  TextField,
  Button,
} from "@mui/material";
import { Dashboard } from "../layouts";
import { BoxContainer } from "../components";

const UserProfile = () => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    avatarUrl: "https://example.com/user-avatar.jpg",
    address: "123 Main St, City, Country",
    contactNumber: "+1 (123) 456-7890",
  };
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [address, setAddress] = useState(user.address);
  const [contactNumber, setContactNumber] = useState(user.contactNumber);

  const handleSaveClick = () => {};
  return (
    <Dashboard>
      <BoxContainer>
        <Toolbar />
        <Container maxWidth={"md"} sx={{ mt: 4, mb: 4 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={5}
          ></Stack>

          <Card>
            <Paper
              elevation={3}
              style={{ padding: "16px", textAlign: "center" }}
            >
              <Avatar
                alt={`${user.firstName} ${user.lastName}`}
                src={user.avatarUrl}
                sx={{ width: 150, height: 150, margin: "0 auto" }}
              />
              <Typography variant="h5" gutterBottom>
                {`${user.firstName} ${user.lastName}`}
              </Typography>
              <Typography variant="body1">{`Address: ${user.address}`}</Typography>
              <Typography variant="body1">{`Contact Number: ${user.contactNumber}`}</Typography>

              <div>
                <TextField
                  label="First Name"
                  variant="outlined"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Last Name"
                  variant="outlined"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Address"
                  variant="outlined"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Contact Number"
                  variant="outlined"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  fullWidth
                  margin="normal"
                />

                <Button
                  color="primary"
                  variant="contained"
                  onClick={handleSaveClick}
                >
                  Update Profile
                </Button>
              </div>
            </Paper>
          </Card>
        </Container>
      </BoxContainer>
    </Dashboard>
  );
};

export { UserProfile };
