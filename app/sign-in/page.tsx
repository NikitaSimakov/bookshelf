"use client";
import { useState, FormEvent, FC } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

const RegistrationPage: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const router = useRouter();
  const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log(res);
      router.push("/books");
      resetForm();
    } catch (error) {
      console.error(error);
    }
    // const signInUser = () => {
    //   signInWithEmailAndPassword(email, password)
    //     .then((res) => {
    //       if (!res) throw new Error("Sign in failed");
    //       console.log("successfully sign in");
    //       router.push("/books");
    //     })
    //     .catch((error) => console.error(error))
    //     .finally(resetForm);
    // };
    // signInUser();
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
    </div>
  );
};

export default RegistrationPage;
