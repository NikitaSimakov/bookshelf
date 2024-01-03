"use client";
import { useState, FormEvent, FC } from "react";

import { useRouter } from "next/navigation";

const RegistrationPage: FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const router = useRouter();
  const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      router.push("/sign-in");
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
