"use client";
import { useState, FormEvent, FC } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { toast, ToastContainer } from "react-toastify";
import Spinner from "@/components/Loading/Spinner";
import style from "../signin/signin.module.scss";
import { IoClose } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FiLock } from "react-icons/fi";

interface FirebaseAuthError extends Error {
  code: string;
}

const RegistrationPage: FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const resetForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser!, {
        displayName: username,
      });
      router.push("/signin");
      resetForm();
    } catch (error) {
      console.error(error);
      const firebaseError = error as FirebaseAuthError;
      if (firebaseError.code === "auth/weak-password") {
        toast.error("Password should be at least 6 characters.");
      } else if (firebaseError.code === "auth/email-already-in-use") {
        toast.error("Email is already in use. Please use a different email.");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={style.formWrapper}>
      <Link className={style.closeButton} href="/books/all">
        <IoClose size={"28px"} className={style.closeButtonIcon} />
      </Link>
      <form onSubmit={handleSignUp}>
        <div className={style.formBox}>
          <input
            className={style.input}
            placeholder="name"
            id="username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
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
          Sign up
        </button>
      </form>
      <div className={style.linkBox}>
        <Link className={`${style.link} ${style.active}`} href="/signup">
          Sign Up
        </Link>
        <Link className={style.link} href="/signin">
          Sign In
        </Link>
      </div>
      <Spinner isLoading={isLoading} />
      <ToastContainer />
    </div>
  );
};

export default RegistrationPage;
