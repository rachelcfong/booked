import React from "react";

const AppContext = React.createContext({
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
  firstName: "",
  setFirstName: () => {},
  lastName: "",
  setLastName: () => {},
  address: "",
  setAddress: () => {},
  gender: "",
  setGender: () => {},
  healthcareProvider: "",
  setHealthcareProvider: () => {},
  preferredLanguage: "",
  setPreferredLanguage: () => {},
  about: "",
  setAbout: () => {},
  reviews: [],
  setReviews: () => {},
  appointments: [],
  setAppointments: () => {},
});
export default AppContext;
