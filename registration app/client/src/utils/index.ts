import { Departments } from "../data";

export const getDepartmentName = (departmentNumber: number): string => {
  const department = Departments.find(
    (dep) => dep.departmentNumber === departmentNumber
  );
  if (department) {
    return department.departmentName;
  } else {
    throw new Error(`Department with number ${departmentNumber} not found`);
    // or return a default value: return "Department not found";
  }
};
