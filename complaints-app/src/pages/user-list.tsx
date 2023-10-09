import React, { useMemo, useState } from "react";
import { Dashboard } from "../layouts";
import {
  Box,
  Button,
  Card,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { BoxContainer } from "../components";
import { IPerson } from "../models";

//nested data is ok, see accessorKeys in ColumnDef below
const data: IPerson[] = [
  {
    id: 1,
    firstName: "kaveesha",
    lastName: "rathnayaka",
    nameWithInitials: "r.m.k.g.rathnayaka",
    fullName: "kaveesha rathnayaka",
    address: "borella",
    contactNumber: "0765467891",
    email: "doyouknowyt31@gmail.com",
    nic: "978765435V",
    gender: 1,
    userRoleId: 2,
    policeStationId: 1,
    secretCode: null,
    password: "$2b$10$C4nAKfLs13mgmCmIPMKUruyosZFCajrsoTFdo4cyHP/5aeYdmXeKO",
    filename: null,
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5NjcwNzM3NCwiZXhwIjoxNzI4MjQzMzc0fQ.-5rT0Zefob8O95SJOc5mz66bhP5vEZmBpyjvKDzQwsc",
    createdAt: "2023-10-07T19:09:39.000Z",
    updatedAt: "2023-10-07T19:36:14.000Z",
  },
  {
    id: 2,
    firstName: "sithija",
    lastName: "shehara",
    nameWithInitials: "n.s.shehara",
    fullName: "sithija shehara",
    address: "maharagama",
    contactNumber: "0765467890",
    email: "nsithijashehara@gmail.com",
    nic: "978765435V",
    gender: 1,
    userRoleId: 1,
    policeStationId: 1,
    secretCode: null,
    password: "$2b$10$CRcFPwF7rVTgunozTwMqw.h91T638jV8mP94wFKKr7/tYBu7KbRWC",
    filename: null,
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY5NjcwNTgzNCwiZXhwIjoxNzI4MjQxODM0fQ.eIvtEBuH5usuYEsz_e-Vk0NAsbUhmnlrPzqo9olIq7E",
    createdAt: "2023-10-07T19:09:51.000Z",
    updatedAt: "2023-10-07T19:10:34.000Z",
  },
];

export const UsersList = () => {
  const columns = useMemo<MRT_ColumnDef<IPerson>[]>(
    () => [
      {
        accessorKey: "firstName", //access nested data with dot notation
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "contactNumber", //normal accessorKey
        header: "Contact Number",
        size: 200,
      },
      {
        accessorKey: "nic",
        header: "NIC",
        size: 150,
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 150,
      },
    ],
    []
  );

  return (
    <Dashboard>
      <BoxContainer>
        <Toolbar />
        <Container maxWidth={false} sx={{ mt: 4, mb: 4 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={5}
          >
            <Typography variant="h5" gutterBottom>
              Users
            </Typography>
            {/* <Button variant="contained" onClick={toggleDrawer}>
              Add User
            </Button> */}
          </Stack>

          <Card>
            <MaterialReactTable columns={columns} data={data} />
          </Card>
        </Container>
      </BoxContainer>
    </Dashboard>
  );
};
