"use client";
import { useState, FormEvent, FC } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { toast, ToastContainer } from "react-toastify";
import Spinner from "@/components/Spinner";

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
      <Spinner isLoading={isLoading} />
      <ToastContainer />
    </div>
  );
};

export default RegistrationPage;
