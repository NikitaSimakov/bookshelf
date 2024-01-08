"use client";

import { useState, FormEvent, FC } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import GoogleButton from "@/components/GoogleButton";
import Spinner from "@/components/Spinner";

const RegistrationPage: FC = () => {
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
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Sign in</button>
      </form>

      <GoogleButton />
      <Link href="/signup">Sign Up</Link>
      <Spinner isLoading={isLoading} />
      <ToastContainer />
    </div>
  );
};

export default RegistrationPage;
