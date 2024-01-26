"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import style from "./GoogleButton.module.scss";

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
    <button className={style.googleButton} onClick={handleClick}>
      {loading ? (
        <span className={style.buttonText}>Loading..</span>
      ) : (
        <>
          <FcGoogle className={style.googleIcon} />
          <span className={style.buttonText}>Sign in with Google</span>
        </>
      )}
    </button>
  );
};

export default GoogleButton;
