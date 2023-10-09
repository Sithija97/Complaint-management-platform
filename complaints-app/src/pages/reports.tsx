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
  CircularProgress,
} from "@mui/material";
import { Delete, Edit, MoreVert } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { CreateReport } from "./create-report";
import { BoxContainer } from "../components";
import { IReportUser } from "../models";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { getReportByUser } from "../store/reports/reportSlice";

export const Reports = () => {
  const dispatch = useAppDispatch();
  const { isGetAllFinesLoading } = useAppSelector(
    (state: RootState) => state.fines
  );

  useEffect(() => {
    dispatch(getReportByUser());
  }, []);

  const [show, setShow] = useState(false);
  const toggleDrawer = () => setShow(!show);

  const columns = useMemo<MRT_ColumnDef<IReportUser>[]>(
    () => [
      {
        accessorKey: "PoliceReportRequest.title", //access nested data with dot notation
        header: "Police Report Request",
        size: 150,
      },
      {
        accessorKey: "filename",
        header: "Report",
        size: 150,
      },
    ],
    []
  );
  const data: IReportUser[] = useAppSelector(
    (state: RootState) => state.policeReports.userReports
  );

  if (isGetAllFinesLoading) {
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
              My Reports
            </Typography>
            {/* <Button variant="contained" onClick={toggleDrawer}>
              Create Report
            </Button> */}
          </Stack>

          <Card>
            <MaterialReactTable columns={columns} data={data} />
          </Card>
        </Container>
      </BoxContainer>

      <Drawer open={show} onClose={toggleDrawer} anchor="right">
        <CreateReport />
      </Drawer>
    </Dashboard>
  );
};
