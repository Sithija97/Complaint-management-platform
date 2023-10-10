import React, { useEffect, useMemo, useState } from "react";
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
} from "@mui/material";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { CreateReport } from "./create-report";
import { BoxContainer, CustomSpinner } from "../components";
import { IReport } from "../models";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { getAllReports } from "../store/reports/reportSlice";

export const ReportsList = () => {
  const dispatch = useAppDispatch();
  const { isGetAllReportsLoading } = useAppSelector(
    (state: RootState) => state.policeReports
  );

  const [show, setShow] = useState(false);
  const toggleDrawer = () => setShow(!show);

  useEffect(() => {
    dispatch(getAllReports());
  }, []);

  const data: IReport[] = useAppSelector(
    (state: RootState) => state.policeReports.reports
  );
  const columns = useMemo<MRT_ColumnDef<IReport>[]>(
    () => [
      {
        accessorKey: "PoliceReportRequest.title",
        header: "Report Title",
        size: 150,
      },
      {
        accessorKey: "User.firstName",
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "User.lastName", //normal accessorKey
        header: "Last Name",
        size: 200,
      },
      {
        accessorKey: "filename",
        header: "Report",
        size: 150,
      },
    ],
    []
  );

  if (isGetAllReportsLoading) {
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
              Reports List
            </Typography>
            <Button variant="contained" onClick={toggleDrawer}>
              Create Report
            </Button>
          </Stack>

          <Card>
            <MaterialReactTable columns={columns} data={data} />
          </Card>
        </Container>
      </BoxContainer>

      <Drawer open={show} onClose={toggleDrawer} anchor="right">
        <CreateReport onCloseDrawer={toggleDrawer} />
      </Drawer>
    </Dashboard>
  );
};
