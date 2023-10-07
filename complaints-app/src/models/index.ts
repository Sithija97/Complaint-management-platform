export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  nameWithInitials: string;
  fullName: string;
  address: string;
  contactNumber: string;
  email: string;
  gender: number;
  nic: string;
  userRoleId: number;
  policeStationId: number;
  password: string;
  token?: string;
  updatedAt?: string;
  createdAt?: string;
  filename: string | null;
}

export interface IComplaint {
  id: number;
  title: string;
  policeStationId: number;
  complaint: string;
  category: number;
  statusId: number;
  userId: number;
  isDeleted: number;
  createdAt?: string;
  updatedAt?: string;
  User: {
    id: number;
    firstName: string;
    lastName: string;
  };
}

export interface IComplaintUser {
  id: number;
  title: string;
  policeStationId: number;
  complaint: string;
  category: number;
  statusId: number;
  userId: number;
  isDeleted: number;
  updatedAt?: string;
  createdAt?: string;
}

export interface IFine {
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
  createdAt?: string;
  updatedAt?: string;
  User: {
    id: number;
    firstName: string;
    lastName: string;
  };
}

export interface IFineUser {
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
  createdAt?: string;
  updatedAt?: string;
}

export interface IReport {
  id: number;
  policeReportRequestId: number;
  filename: string;
  userId: number;
  uploadedBy: number;
  policeStationId: number;
  updatedAt?: string;
  createdAt?: string;
  User: {
    id: number;
    firstName: string;
    lastName: string;
  };
}

export interface IReportUser {
  id: number;
  policeReportRequestId: number;
  filename: string;
  userId: number;
  uploadedBy: number;
  policeStationId: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface IReportRequest {
  id: number;
  title: string;
  category: number;
  description: string;
  userId: number;
  status: number;
  policeStationId: number;
  createdAt?: string;
  updatedAt?: string;
  User: {
    id: number;
    firstName: string;
    lastName: string;
  };
}

export interface IReportRequestUser {
  id: number;
  title: string;
  category: number;
  description: string;
  userId: number;
  status: number;
  policeStationId: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface IPayment {
  id: number;
  title: string;
  description: string;
  fineId: number;
  userId: number;
  amount: number;
  createdAt?: string;
  updatedAt?: string;
  User: {
    id: number;
    firstName: string;
    lastName: string;
    PoliceStation: {
      id: number;
      policeStationName: string;
    };
  };
}

export interface IPaymentUser {
  id: number;
  title: string;
  description: string;
  fineId: number;
  userId: number;
  amount: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface IAuthInitialState {
  user: IUser | null;
  users: IUser[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

export interface IComplaintsInitialState {
  complaints: IComplaint[];
  userComplaints: IComplaintUser[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}
export interface IFineInitialState {
  fines: IFine[];
  userFines: IFineUser[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

export interface IReportsInitialState {
  reports: IReport[];
  userReports: IReportUser[];
  reportRequests: IReportRequest[];
  userReportRequests: IReportRequestUser[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

export interface IPaymentInitialState {
  payments: IPayment[];
  userPayments: IPaymentUser[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

export interface IRegisterData {
  firstName: string;
  lastName: string;
  nameWithInitials: string;
  fullName: string;
  address: string;
  contactNumber: string;
  email: string;
  nic: string;
  gender: number;
  userRoleId: number;
  policeStationId: number;
  password: string;
  filename: string | null;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IUpdateData {
  firstName: string;
  lastName: string;
  nameWithInitials: string;
  fullName: string;
  address: string;
  contactNumber: string;
  userRoleId: number;
  policeStationId: number;
}

export interface IVerifyUserData {
  secretCode: string;
  email: string;
  password: string;
}

export interface IForgotPWData {
  email: string;
}

export interface IComplaintData {
  title: string;
  policeStationId: number;
  complaint: string;
  category: number;
  statusId: number;
}

export interface IFineData {
  title: string;
  description: string;
  category: number;
  statusId: number;
  userId: number;
  Amount: number;
  Tax: number;
  OtherAmounts: number;
}

export interface IRemoveComplaintData {
  complaintId: string;
  reason: string;
}

export interface IFineData {
  title: string;
  category: number;
  description: string;
  issuedDate: string;
  endDate: string;
  amount: number;
  userId: number;
  statusId: number;
  tax: number;
  otherCharges: number;
}

export interface IReportRequestData {
  title: string;
  description: string;
  category: number;
  status: number;
  fileName: File | any | null; // file array
}

export interface IPaymentData {
  title: string;
  description: string;
  fineId: number;
  amount: number;
}

export interface IReportStatus {
  id: number;
  status: number;
}
