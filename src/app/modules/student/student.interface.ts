import { Schema, model, connect } from 'mongoose'

export type Guardian = {
  father: string
  mother: string
  fatherOccupation: string
  motherOccupation: string
  fatherContactNo: string
  motherContactNo: string
}

export type Student = {
  id: string
  name: {
    firstName: string
    middleName: string
    lastName: string
  }
  gender: 'male' | 'female'
  dateOfBirth: string
  contactNumber: string
  emergencyContactNumber: string
  email: string
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  presentAddress: string
  parmanentAddress: string
}
