import React, { useEffect, useMemo, useState } from "react";
import { Dashboard } from "../layouts";
import {
  Box,
  Button,
  Card,
  Drawer,
  Container,
  Stack,
  Toolbar,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { CreateReport } from "./create-report";
import { BoxContainer, CustomSpinner } from "../components";
import { CreateFine } from "./create-fine";
import { IFine } from "../models";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { getAllFines } from "../store/fines/fineSlice";

export const FineList = () => {
  const dispatch = useAppDispatch();
  const { isGetAllFinesLoading } = useAppSelector(
    (state: RootState) => state.fines
  );

  useEffect(() => {
    dispatch(getAllFines());
  }, []);

  const [show, setShow] = useState(false);
  const toggleDrawer = () => setShow(!show);

  const navigate = useNavigate();

  const columns = useMemo<MRT_ColumnDef<IFine>[]>(
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
        accessorKey: "title", //normal accessorKey
        header: "Title",
        size: 200,
      },
      {
        accessorKey: "amount",
        header: "Amount",
        size: 150,
      },
      {
        accessorKey: "tax",
        header: "Tax",
        size: 150,
      },
    ],
    []
  );
  const data: IFine[] = useAppSelector((state: RootState) => state.fines.fines);

  if (isGetAllFinesLoading) {
    return <CustomSpinner />;
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
              Fines List
            </Typography>
            <Button variant="contained" onClick={toggleDrawer}>
              Add Fine
            </Button>
          </Stack>

          <Card>
            <MaterialReactTable columns={columns} data={data} />
          </Card>
        </Container>
      </BoxContainer>
      <Drawer open={show} onClose={toggleDrawer} anchor="right">
        <CreateFine onCloseDrawer={toggleDrawer} />
      </Drawer>
    </Dashboard>
  );
};
