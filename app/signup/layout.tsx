import { Metadata } from "next";
import RegistrationPage from "./page";
import style from "../signin/signin.module.scss";

export const metadata: Metadata = {
  title: "Bookshelf | Sign up",
};

const SignUpLayout = () => {
  return (
    <section className={style.container}>
      <RegistrationPage />
    </section>
  );
};

export default SignUpLayout;
