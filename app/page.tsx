"use client";

import { useEffect } from "react";
// import { auth } from "./firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";

// import Image from "next/image";
// import styles from "./page.module.css";

export default function Home() {
  // const [user, loading] = useAuthState(auth);
  const router = useRouter();
  // useEffect(() => {
  //   console.log(user);
  //   console.log(loading);
  //   if (!user && !loading) router.push("/sign-in");
  //   if (user && !loading) router.push("/books");
  // }, [user, loading]);

  return <h1>The first page</h1>;
}
