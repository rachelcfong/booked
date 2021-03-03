import React from "react";

const AppContext = React.createContext({
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
});
export default AppContext;
