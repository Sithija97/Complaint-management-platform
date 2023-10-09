import React, { useEffect, useMemo, useState } from "react";
import { Dashboard } from "../layouts";
import {
  Box,
  Card,
  CircularProgress,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { CreateReport } from "./create-report";
import { BoxContainer } from "../components";
import { IPayment } from "../models";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { getAllPayments } from "../store/payments/paymentSlice";

export const PaymentList = () => {
  const dispatch = useAppDispatch();
  const { isGetAllPaymentsLoading } = useAppSelector(
    (state: RootState) => state.payments
  );

  useEffect(() => {
    dispatch(getAllPayments());
  }, []);

  const [show, setShow] = useState(false);
  const toggleDrawer = () => setShow(!show);

  const columns = useMemo<MRT_ColumnDef<IPayment>[]>(
    () => [
      {
        accessorKey: "User.firstName", //access nested data with dot notation
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "User.lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "User.PoliceStation.policeStationName", //normal accessorKey
        header: "Police Station",
        size: 200,
      },
      {
        accessorKey: "title",
        header: "Title",
        size: 150,
      },
      {
        accessorKey: "amount",
        header: "Amount",
        size: 150,
      },
    ],
    []
  );
  const data: IPayment[] = useAppSelector(
    (state: RootState) => state.payments.payments
  );

  if (isGetAllPaymentsLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", padding: "15px" }}>
        <CircularProgress />
      </Box>
    );
  }

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
              Payments List
            </Typography>
          </Stack>

          <Card>
            <MaterialReactTable columns={columns} data={data} />
          </Card>
        </Container>
      </BoxContainer>
    </Dashboard>
  );
};
