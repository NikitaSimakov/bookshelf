"use client";

import { useState, FormEvent, FC } from "react";
import { signIn } from "next-auth/react";
import GoogleButton from "@/components/GoogleButton";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const RegistrationPage: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(useSearchParams().get("category"));
  const callbackUrl = useSearchParams().get("category") || "/books/all";
  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl,
      });
      resetForm();
    } catch (error) {
      console.error(error);
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
        <button type="submit">Register</button>
      </form>
      <GoogleButton />
      <Link href="/signup">Sign Up</Link>
    </div>
  );
};

export default RegistrationPage;
