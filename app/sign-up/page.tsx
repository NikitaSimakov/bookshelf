"use client";
import { useState, FormEvent, FC } from "react";

import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import Link from "next/link";

const RegistrationPage: FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const resetForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      // console.log("createUserWithEmail...", res);
      await updateProfile(auth.currentUser!, {
        displayName: username,
      });
      router.push("/signin");
      // updateProfile(auth.currentUser as User, {
      //   displayName: username,
      // }).catch((err) => console.log(err));
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Link href="/books/all">X</Link>
      <h2>Registration</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
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
        <button type="submit">Sign up</button>
      </form>
      <Link href="/signin">Sign In</Link>
    </div>
  );
};

export default RegistrationPage;
