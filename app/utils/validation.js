import * as yup from 'yup';

export const addAddressValidation = {
  firstName: 'First Name is required',
  lastName: 'Last Name is required',
  line1: 'Address is required',
  city: 'City is required',
  state: 'State is required',
  zip: 'Zip code is required',
  phoneNo: 'Phone No is required',
  zipCodeLength: 'Invalid zip code',
  phoneNoLength: 'Invalid phone no',
};

export const errorSchema = {
  firstName: value => value.trim().length,
  lastName: value => value.trim().length,
  line1: value => value.trim().length,
  line2: value => value.trim().length,
  city: value => value.trim().length,
  state: value => value.trim().length,
  zip: value => value.trim().length > 5,
  phone: value => value.trim().length > 9,
};
