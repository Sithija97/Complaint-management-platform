import React, { useEffect, useMemo, useState } from "react";
import { Dashboard } from "../layouts";
import {
  Box,
  Card,
  CircularProgress,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { CreateReport } from "./create-report";
import { BoxContainer } from "../components";
import { IReportRequest } from "../models";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { getAllPayments } from "../store/payments/paymentSlice";
import {
  getAllReportRequests,
  setSelectedReportRequestId,
} from "../store/reports/reportSlice";
import { ChangeReportStatus } from "./change-report-status";

export const ReportRequestList = () => {
  const dispatch = useAppDispatch();
  const { isGetAllReportRequestsLoading } = useAppSelector(
    (state: RootState) => state.policeReports
  );

  useEffect(() => {
    dispatch(getAllReportRequests());
  }, []);

  const [show, setShow] = useState(false);
  const toggleDrawer = () => setShow(!show);

  const handleChangeStatus = (row: any) => {
    dispatch(setSelectedReportRequestId(row));
    toggleDrawer();
  };

  const columns = useMemo<MRT_ColumnDef<IReportRequest>[]>(
    () => [
      {
        accessorKey: "id",
        header: "Id",
        size: 100,
      },
      {
        accessorKey: "title",
        header: "Title",
        size: 150,
      },
      {
        accessorKey: "description",
        header: "Description",
        size: 150,
      },
      {
        accessorKey: "User.firstName",
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "User.lastName",
        header: "Last Name",
        size: 150,
      },
    ],
    []
  );
  const data: IReportRequest[] = useAppSelector(
    (state: RootState) => state.policeReports.reportRequests
  );

  if (isGetAllReportRequestsLoading) {
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
              Report Request List
            </Typography>
          </Stack>

          <Card>
            <MaterialReactTable
              columns={columns}
              data={data}
              enableRowActions
              renderRowActions={({ row, table }) => (
                <Box sx={{ display: "flex", gap: "1rem" }}>
                  <IconButton
                    color="error"
                    onClick={() => handleChangeStatus(row.getValue("id"))}
                  >
                    <EditIcon sx={{ color: "#2288E5" }} />
                  </IconButton>
                </Box>
              )}
              positionActionsColumn="last"
            />
          </Card>
        </Container>
      </BoxContainer>

      <Drawer open={show} onClose={toggleDrawer} anchor="right">
        <ChangeReportStatus />
      </Drawer>
    </Dashboard>
  );
};
