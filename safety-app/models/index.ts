export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  address: string;
  contactNumber: string;
  email: string;
  nic: string;
  policeStationId: number;
  password: string;
  token?: string;
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

export interface IRegisterData {
  firstName: string;
  lastName: string;
  fullName: string;
  address: string;
  contactNumber: string;
  email: string;
  nic: string;
  policeStationId: number;
  password: string;
}

export interface ILoginData {
  email: string;
  password: string;
}
