import React from "react";
import { IHomeContext } from "../ts/types";

export const FormContext = React.createContext<IHomeContext>({
  formProps: {
    onChange: () => {},
    onSubmit: () => {},
    inputStyle: "",
    noValidateText: "",
  }
});
