import { useState } from "react";
// @mui
import {
  Card,
  Stack,
  Button,
  Container,
  Typography,
  Grid,
  TextField,
} from "@mui/material";
// components
import Iconify from "../components/iconify";
// mock
import { AppTasks } from "../sections/@dashboard/app";
import { useNavigate } from "react-router-dom";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function PlannedTasksPage() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([
    { id: "1", label: "Create FireStone Logo" },
    { id: "2", label: "Add SCSS and JS files if required" },
    { id: "3", label: "Stakeholder Meeting" },
    { id: "4", label: "Scoping & Estimations" },
    { id: "5", label: "Sprint Showcase" },
  ]);

  const handleAddTasks = () => {
    navigate("/dashboard/add-tasks", { replace: true });
  };
  return (
    <>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Tasks
          </Typography>
          <Button
            variant="contained"
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={handleAddTasks}
          >
            Add Task
          </Button>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <TextField name="task" label="Add notes.." fullWidth size="small" />
        </Stack>

        <Card>
          <Grid item xs={12} md={6} lg={8}>
            <AppTasks title="Tasks" list={tasks} />
          </Grid>
        </Card>
      </Container>
    </>
  );
}
