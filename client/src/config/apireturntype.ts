export interface Room {
  currentNumber: number;
  idUser: string[];
  _id: string;
  maxNumber: number;
  address: string;
  name: string;
  __v: number;
}

interface idRole {
  __id: string;
  name: string;
  __v: number;
}

export interface Patient {
  avatars: any[];
  gender: number;
  isActive: boolean;
  gps: number[];
  _id: string;
  address: string;
  password: string;
  phoneNumber: string;
  dateOfBirth: string;
  identityCard: string;
  fullName: string;
  email: string;
  idRole: idRole;
  __v: number;
}

export interface Users {
  avatars: any[];
  gender: number;
  isActive: boolean;
  gps: number[];
  _id: string;
  address: string;
  password: string;
  phoneNumber: string;
  dateOfBirth: string;
  identityCard: string;
  fullName: string;
  email: string;
  idRole: idRole;
  __v: number;
}

export interface Shift {
  idUser: string[];
  _id: string;
  startTime: string;
  endTime: string;
  __v: number;
}
