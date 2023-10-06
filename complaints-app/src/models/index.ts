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
  status: number;
  userId: number;
  tax: number;
  otherCharges: number;
  updatedAt?: string;
  createdAt?: string;
}

export interface IAuthInitialState {
  user: IUser | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

export interface IComplaintsInitialState {
  complaints: IComplaint[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}
export interface IFineInitialState {
  fines: IFine[];
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
