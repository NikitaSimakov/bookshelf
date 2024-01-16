import { Metadata } from "next";
import RegistrationPage from "./page";

export const metadata: Metadata = {
  title: "Bookshelf | Sign up",
};

const SignUpLayout = () => {
  return <RegistrationPage />;
};

export default SignUpLayout;
