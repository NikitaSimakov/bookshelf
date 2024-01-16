"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const GoogleButton = () => {
  const [loading, setIsLoading] = useState(false);
  const callbackUrl = useSearchParams().get("callBackUrl") || "/books";

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const res = await signIn("google", { callbackUrl });
      if (!res?.ok) throw new Error();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <button onClick={handleClick}>
      {loading ? <span>loading..</span> : <span>Sign in with Google</span>}
    </button>
  );
};

export default GoogleButton;
