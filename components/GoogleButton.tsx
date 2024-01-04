"use client";

import { signIn } from "next-auth/react";
// import { useSearchParams } from "next/navigation";

const GoogleButton = () => {
  // const searchParams = useSearchParams();
  // const callBackUrl = searchParams.get("callBackUrl") || "/books";
  return (
    <button onClick={() => signIn("google", { callbackUrl: "/books" })}>
      Sign in with Google
    </button>
  );
};

export default GoogleButton;
