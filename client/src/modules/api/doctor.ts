import axios from "axios";
import * as config from './../config';

const DOCTOR_REGISTER: string = "/api/doctor/register";
const DOCTOR_SIGNIN: string = "/api/user/login"
const DOCTOR_REGISTER_PATIENT: string = "/api/doctor/register-patient";
const DOCTOR_GETLIST_PATIENT: string = "/api/doctor/all-patient"
const DOCTOR_ADDPATIENTOROOM: string = "/api/doctor/add-patient-to-room/";

export default class DoctorAPI {

  userRegister = (formData: any, response: any, error: any) => {
    const data = {
      'address': formData.get('address'),
      'password': formData.get('password'),
      'phoneNumber': formData.get('phoneNumber'),
      'dateOfBirth': formData.get('dateOfBirth'),
      'identityCard': formData.get('identityCard'),
      'fullName': formData.get('fullName'),
      'email': formData.get('email'),
    }
    axios.post(DOCTOR_REGISTER, data)
      .then(response)
      .catch(error);
  };

  userLogin = (formData: any, response: any, error: any) => {
    const data = {
      "identityCard": formData.get("identityCard"),
      "password": formData.get("password")
    }
    axios.post(DOCTOR_SIGNIN, data)
      .then(response)
      .catch(error);
  };

  registerPatient = (token: string, formData: any, response: any, error: any) => {
    const data = {
      'address': formData.get('address'),
      'password': formData.get('password'),
      'phoneNumber': formData.get('phoneNumber'),
      'dateOfBirth': formData.get('dateOfBirth'),
      'identityCard': formData.get('identityCard'),
      'fullName': formData.get('fullName'),
      'email': formData.get('email'),
      'gender': formData.get('gender')
    }
    axios.post(DOCTOR_REGISTER_PATIENT, data, { headers: { Authorization: token } })
      .then(response)
      .catch(error);
  };

  getListPatient = (token: string, response: any, error: any) => {
    axios.get(DOCTOR_GETLIST_PATIENT, { headers: { Authorization: token } })
      .then(response)
      .catch(error);
  };

  addPatientToRoom = (token: string, idPatient: string, formData: any, response: any, error: any) => {
    const data = {
      "idRoom": formData.get("idRoom")
    }
    axios.post(DOCTOR_ADDPATIENTOROOM + idPatient, data, { headers: { Authorization: token } })
      .then(response)
      .catch(error);
  };
}