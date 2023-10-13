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
import { IReport, IUser } from "../models";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { getAllReports } from "../store/reports/reportSlice";
import policeReportService from "../services/police-reports-service";
import { saveAs } from 'file-saver';
import * as BlobUtil from 'blob-util';

export const ReportsList = () => {
  const dispatch = useAppDispatch();
  const { isGetAllReportsLoading } = useAppSelector(
    (state: RootState) => state.policeReports
  );

  const user = useAppSelector((state: RootState) => state.auth.user)

  const [show, setShow] = useState(false);
  const toggleDrawer = () => setShow(!show);

  useEffect(() => {
    dispatch(getAllReports());
  }, []);

  // useEffect(() => {
  //   handleDownloadClick("src\\assets\\1697227065151.pdf")
  // }, []);

  const handleDownloadClick = (url: string) => {
    // Make an HTTP request to the backend to download the PDF
    policeReportService.downloadPdf(user?.token!, url)
      .then((response) => {
        console.log("res head", response)
        // const blob = new Blob([response.data], { type: 'application/pdf' });

        // saveAs(blob, 'your_filename.pdf');

        const url = window.URL.createObjectURL(new Blob([response], { type: 'application/pdf' }));
        const a = document.createElement('a');
        a.href = url;
        a.download = 'sample.pdf'; // Set the desired file name
        a.click();
        window.URL.revokeObjectURL(url);
        // // Create a Blob from the response data
        // const blob = new Blob([response.data], { type: "application/pdf" });

        // // Create a temporary URL for the Blob
        // const url = window.URL.createObjectURL(blob);

        // // Create a temporary link element and trigger the download
        // const a = document.createElement("a");
        // a.href = url;
        // a.download = "report.pdf"; // Set the desired file name
        // a.click();

        // // Release the URL object
        // window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error downloading PDF:", error);
      });
  };
  

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
        // Define a custom cell renderer for the "filename" column
        Cell: ({ row }) => (
          <a
            href={row.original.filename} // Set the PDF file URL as the href
            download={`report_${row.original.filename}.pdf`} // Specify the desired file name
          >
            Download PDF
          </a>
        ),
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
