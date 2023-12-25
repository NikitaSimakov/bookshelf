"use client";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useState, ChangeEvent, FormEvent, FC } from "react";

const RegistrationPage: FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  // const handleSignUp = async (event: FormEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  //   try {
  //     const res = await createUserWithEmailAndPassword(email, password);
  //     console.log({ res });
  //     setEmail("");
  //     setPassword("");
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  return (
    <div>
      <h2>Registration</h2>
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button
          onSubmit={async (event) => {
            event.preventDefault();
            const res = await createUserWithEmailAndPassword(email, password);
            console.log({ res });
            setEmail("");
            setPassword("");
          }}
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
