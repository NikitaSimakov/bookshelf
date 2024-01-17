import { Metadata } from "next";
import SignIn from "./page";
import style from "./signin.module.scss";

export const metadata: Metadata = {
  title: "Bookshelf | Sign in",
};
const SignInLayout = () => {
  return (
    <section className={style.container}>
      <SignIn />
    </section>
  );
};

export default SignInLayout;
