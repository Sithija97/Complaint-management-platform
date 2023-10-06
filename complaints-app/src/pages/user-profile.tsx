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
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { update } from "../store/auth/authSlice";

const UserProfile = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.auth.user);
  const user_test = {
    firstName: "John",
    lastName: "Doe",
    nameWithInitials: "",
    fullName: "John Doe",
    userRoleId: 1,
    policeStationId: 2,
    avatarUrl: "https://example.com/user-avatar.jpg",
    address: "123 Main St, City, Country",
    contactNumber: "+1 (123) 456-7890",
  };
  const [firstName, setFirstName] = useState(
    user?.firstName || user_test.firstName
  );
  const [lastName, setLastName] = useState(
    user?.lastName || user_test.lastName
  );
  const [nameWithInitials, setNameWithInitials] = useState(
    user?.nameWithInitials || user_test.nameWithInitials
  );
  const [fullName, setFullName] = useState(
    user?.fullName || user_test.fullName
  );
  const [userRoleId, setUserRoleId] = useState(
    user?.userRoleId || user_test.userRoleId
  );
  const [policeStationId, setPoliceStationId] = useState(
    user?.policeStationId || user_test.policeStationId
  );
  const [address, setAddress] = useState(user?.address || user_test.address);
  const [contactNumber, setContactNumber] = useState(
    user?.contactNumber || user_test.contactNumber
  );

  const handleSaveClick = () => {
    const updatedUser = {
      firstName,
      lastName,
      nameWithInitials,
      fullName,
      address,
      contactNumber,
      userRoleId,
      policeStationId,
    };
    console.log("úpdated user :", updatedUser);
    // dispatch(update(updatedUser));
  };
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
                alt={`${firstName} ${lastName}`}
                src={user_test.avatarUrl}
                sx={{ width: 90, height: 90, margin: "0 auto" }}
              />
              <Typography variant="h5" gutterBottom>
                {`${firstName} ${lastName}`}
              </Typography>
              <Typography variant="body1">{`Address: ${address}`}</Typography>
              <Typography variant="body1">{`Contact Number: ${contactNumber}`}</Typography>

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
                  label="Last Name"
                  variant="outlined"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
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
