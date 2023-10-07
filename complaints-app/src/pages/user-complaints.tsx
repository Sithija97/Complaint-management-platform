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
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  TableFooter,
  Popover,
  MenuItem,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  Grid,
  ListItemIcon,
  ListItemText,
  Drawer,
  DialogTitle,
} from "@mui/material";
import { Delete, Edit, MoreVert } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { BoxContainer } from "../components";
import { CreateComplaint } from "./create-complaint";
import DeleteIcon from '@mui/icons-material/Delete';

type Person = {
  id: number,
  title: string,
  category: number,
  description: string,
  issuedDate: string,
  endDate: string,
  amount: number,
  inchargeId: number,
  userId: number,
  status: number,
  tax: number,
  otherCharges: number,
  policeStationId: number,
  
  createdAt: string,
  updatedAt: string,
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Person[] = [
  {
    id: 6,
    title: "fine 2",
    category: 1,
    description: "fine 1 des",
    issuedDate: "2023-10-06T20:44:55.000Z",
    endDate: "2023-10-06T20:44:55.000Z",
    amount: 2000,
    inchargeId: 3,
    userId: 4,
    status: 1,
    tax: 100,
    otherCharges: 100,
    policeStationId: 1,
    createdAt: "2023-10-07T06:31:49.000Z",
    updatedAt: "2023-10-07T06:31:49.000Z"
}
];

export const UserComplaints = () => {
  const [show, setShow] = useState(false);
  const toggleDrawer = () => setShow(!show);

  const navigate = useNavigate();

  const [open, setOpen] = useState(null);

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleOpenMenu = (event: any) => {
    setOpen(event.currentTarget);
  };

  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "title", //access nested data with dot notation
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "amount",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "tax", //normal accessorKey
        header: "Address",
        size: 200,
      },
      {
        accessorKey: "otherCharges",
        header: "City",
        size: 150,
      },
      {
        accessorKey: "id",
        header: "State",
        size: 150,
      },
      {
        header: "Actions",
        size: 100,
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
              My Complaints
            </Typography>
            <Button variant="contained" onClick={toggleDrawer}>
              Create Complaint
            </Button>
          </Stack>

          <Card>
            <MaterialReactTable columns={columns} data={data} />
          </Card>
        </Container>
      </BoxContainer>

      <Drawer open={show} onClose={toggleDrawer} anchor="right">
        <CreateComplaint />
      </Drawer>
    </Dashboard>
  );
};
