export interface IUser {
  id: number;
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

export interface IComplaint {
  id: number;
  title: string;
  complaint: string;
  category: number;
  userId: number;
  updatedAt?: string;
  createdAt?: string;
}

export interface IEmergency {
  id: number;
  lat: string;
  long: string;
  userId: number;
  updatedAt?: string;
  createdAt?: string;
}

export interface IContactPerson {
  id: number;
  userId: number;
  contactPersonsName: string;
  address: string;
  contactNumber: string;
  email: string;
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

export interface IEmergencyInitialState {
  emergencies: IEmergency[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

export interface IContactsInitialState {
  contacts: IContactPerson[];
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

export interface IComplaintData {
  title: string;
  policeStationId: number;
  complaint: string;
  category: number;
  userId?: number;
}

export interface IContactPersonData {
  contactPersonsName: string;
  address: string;
  contactNumber: string;
  email: string;
}
