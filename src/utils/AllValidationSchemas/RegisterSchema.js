import * as Yup from "yup";

export const formValidationSchema = Yup.object({
  firstName: Yup.string("Enter your FirstName").required("Name is required"),
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("Enter your password")
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password Must be  8 Characters combination of Uppercase,Lowercase, Number special case Character"
    ),
  address: Yup.string("Enter your Adress").required("Address is required"),
  number: Yup.string("Enter your Mobile number")
    .min(10, "Mobile Number should be 10 characters length")
    .required("Mobile Number is required"),
});

//Login Validation Schema------->

