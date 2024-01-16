import { Metadata } from "next";
import SignIn from "./page";

export const metadata: Metadata = {
  title: "Bookshelf | Sign in",
};
const SignInLayout = () => {
  return <SignIn />;
};

export default SignInLayout;
