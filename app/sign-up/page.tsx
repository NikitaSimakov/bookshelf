"use client";
import { useState, FormEvent, FC } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { updateProfile } from "firebase/auth";
// import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

const RegistrationPage: FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [createUserWithEmailAndPassword] =
  //   useCreateUserWithEmailAndPassword(auth);

  const resetForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const router = useRouter();
  const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // const res = await createUserWithEmailAndPassword(email, password);
      // console.log(res);
      // await updateProfile(auth.currentUser!, {
      //   displayName: username,
      // });
      router.push("/sign-in");
      resetForm();
    } catch (error) {
      console.error(error);
    }
    // const createUser = () => {
    //   createUserWithEmailAndPassword(email, password)
    //     .then((res) => {
    //       if (!res) throw new Error("Sign in failed");
    //       updateProfile(auth.currentUser!, {
    //         displayName: username,
    //       });

    //       console.log("successfully sign up");
    //       router.push("/sign-in");
    //     })
    //     .catch((error) => console.error(error))
    //     .finally(resetForm);
    // };
    // createUser();
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
