"use client";

import { useState, FormEvent, FC } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import GoogleButton from "@/components/Button/GoogleButton";
import Spinner from "@/components/Loading/Spinner";
import { IoClose } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FiLock } from "react-icons/fi";
import style from "./signin.module.scss";
import { injectStyle } from "react-toastify/dist/inject-style";

if (typeof window !== "undefined") {
  injectStyle();
}

const SignIn: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const callbackUrl = useSearchParams().get("category") || "/books/all";

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      res?.ok
        ? router.push(callbackUrl)
        : toast.error("Email or password is incorrect. Please try again.");

      resetForm();
    } catch (error) {
      console.error("handlesignup", error);
      toast.error(
        "Произошла ошибка при аутентификации. Пожалуйста, попробуйте еще раз."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={style.formWrapper}>
        <Link className={style.closeButton} href="/books/all">
          <IoClose className={style.closeButtonIcon} size={"28px"} />
        </Link>
        <form onSubmit={handleSignUp}>
          <div className={style.formBox}>
            <div className={style.inputIconBox}>
              <input
                className={style.input}
                placeholder="email"
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <HiOutlineMail size={28} className={style.inputIcon} />
            </div>
            <div className={style.inputIconBox}>
              <input
                className={style.input}
                placeholder="password"
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <FiLock size={"28px"} className={style.inputIcon} />
            </div>
          </div>
          <button className={style.submitButton} type="submit">
            Sign in
          </button>
          <ToastContainer />
        </form>

        <GoogleButton />
        <div className={style.linkBox}>
          <Link className={style.link} href="/signup">
            Sign Up
          </Link>
          <Link className={`${style.link} ${style.active}`} href="/signin">
            Sign In
          </Link>
        </div>
      </div>
      {/* <ToastContainer /> */}
      <Spinner isLoading={isLoading} />
    </>
  );
};

export default SignIn;
