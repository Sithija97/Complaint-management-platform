// component
import SvgColor from "../../../components/svg-color";

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const navConfig = [
  {
    title: "dashboard",
    path: "/dashboard/app",
    icon: icon("ic_analytics"),
  },
  {
    title: "users",
    path: "/dashboard/user",
    icon: icon("ic_user"),
  },
  {
    title: "complaints",
    path: "/dashboard/complaints",
    icon: icon("ic_blog"),
  },
  {
    title: "fines",
    path: "/dashboard/fines",
    icon: icon("ic_blog"),
  },
  {
    title: "tasks",
    path: "/dashboard/tasks",
    icon: icon("ic_blog"),
  },
];

export default navConfig;
