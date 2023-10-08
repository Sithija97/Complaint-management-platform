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
  Drawer,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { BoxContainer } from "../components";
import { CreateComplaint } from "./create-complaint";
import { useAppDispatch } from "../store/store";
import { setSelectedComplaint } from "../store/complaints/complaintsSlice";
import { RemoveComplaint } from "./remove-complaint";

type Person = {
  id: number;
  title: string;
  category: number;
  description: string;
  issuedDate: string;
  endDate: string;
  amount: number;
  inchargeId: number;
  userId: number;
  status: number;
  tax: number;
  otherCharges: number;
  policeStationId: number;

  createdAt: string;
  updatedAt: string;
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
    updatedAt: "2023-10-07T06:31:49.000Z",
  },
];

export const ComplaintList = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [showRemoveDrawer, setShowRemoveDrawer] = useState(false);
  const toggleDrawer = () => setShow(!show);
  const toggleRemoveDrawer = () => setShowRemoveDrawer(!showRemoveDrawer);

  const handleRemoveComplaint = (row: any) => {
    dispatch(setSelectedComplaint(row));
    toggleRemoveDrawer();
  };

  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "id",
        header: "Id",
        size: 100,
      },
      {
        accessorKey: "title", //access nested data with dot notation
        header: "Title",
        size: 150,
      },
      {
        accessorKey: "amount",
        header: "Amount",
        size: 150,
      },
      {
        accessorKey: "tax", //normal accessorKey
        header: "Tax",
        size: 150,
      },
      {
        accessorKey: "otherCharges",
        header: "Other Charges",
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
              Complaints List
            </Typography>
            {/* <Button variant="contained" onClick={toggleDrawer}>
              Create Complaint
            </Button> */}
          </Stack>

          <Card>
            <MaterialReactTable
              columns={columns}
              data={data}
              // enableRowActions
              // renderRowActions={({ row, table }) => (
              //   <Box sx={{ display: "flex", gap: "1rem" }}>
              //     <IconButton color="error" onClick={() => {}}>
              //       <EditIcon sx={{ color: "#2288E5" }} />
              //     </IconButton>
              //     <IconButton
              //       color="error"
              //       onClick={() => handleRemoveComplaint(row.getValue("id"))}
              //     >
              //       <DeleteIcon sx={{ color: "#e63946" }} />
              //     </IconButton>
              //   </Box>
              // )}
              positionActionsColumn="last"
            />
          </Card>
        </Container>
      </BoxContainer>

      <Drawer open={show} onClose={toggleDrawer} anchor="right">
        <CreateComplaint />
      </Drawer>
      <Drawer
        open={showRemoveDrawer}
        onClose={toggleRemoveDrawer}
        anchor="right"
      >
        <RemoveComplaint />
      </Drawer>
    </Dashboard>
  );
};
