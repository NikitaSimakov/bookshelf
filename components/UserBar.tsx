"use client";

import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import style from "./userBar.module.scss";

const UserBar = () => {
  const session = useSession();
  const pathname = usePathname() || "";

  return (
    <div className={style.userBarWrapper}>
      {session?.data?.user?.image && (
        <img
          height={30}
          width={30}
          src={session?.data?.user?.image}
          alt="Profile photo"
          className={style.userPhoto}
        />
      )}
      <p className={style.userName}>{session?.data?.user?.name}</p>
      {session.status === "authenticated" ? (
        <button
          onClick={() => {
            signOut();
          }}
        >
          Sign Out
        </button>
      ) : (
        <Link
          href={{
            pathname: "/signin",
            query: { category: pathname },
          }}
        >
          Sign In
        </Link>
      )}
    </div>
  );
};

export default UserBar;
