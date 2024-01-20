"use client";

import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoArrowForwardSharp } from "react-icons/io5";
import style from "./userBar.module.scss";

const UserBar = () => {
  const session = useSession();
  const pathname = usePathname() || "";

  return (
    <div className={style.userBarWrapper}>
      <div className={style.userWrapper}>
        {session?.data?.user?.image && (
          <img
            src={session?.data?.user?.image}
            alt="Profile photo"
            className={style.userPhoto}
          />
        )}
        <p className={style.userName}>{session?.data?.user?.name}</p>
        <IoMdArrowDropdown className={style.arrow} size={26} fill="#ffffff" />
      </div>
      {session.status === "authenticated" ? (
        <>
          <div className={style.signOutBtnWrapper}>
            <button
              className={style.logOutBtn}
              onClick={() => {
                signOut();
              }}
            >
              Log Out
              <IoArrowForwardSharp stroke="#EAC645" />
            </button>
          </div>
        </>
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
