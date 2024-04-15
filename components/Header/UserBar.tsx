"use client";

import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoArrowForwardSharp } from "react-icons/io5";
import userDefImg from "../../public/user/user.svg";
import style from "./userBar.module.scss";

const UserBar = () => {
  const session = useSession();
  const pathname = usePathname() || "";

  return (
    <div className={style.userBarWrapper}>
      {session?.data?.user && (
        <div className={style.userWrapper}>
          <img
            src={session?.data?.user?.image || userDefImg.src}
            alt="Profile photo"
            className={style.userPhoto}
          />
          <p className={style.userName}>{session?.data?.user?.name}</p>
        </div>
      )}
      {session.status === "authenticated" ? (
        <>
          <IoMdArrowDropdown className={style.arrow} size={26} fill="#ffffff" />
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
          className={style.userBarWrapperSignIn}
          href={{
            pathname: "/signin",
            query: { category: pathname },
          }}
        >
          Sign In
          <IoArrowForwardSharp className={style.pointer} stroke="#EAC645" />
        </Link>
      )}
    </div>
  );
};

export default UserBar;
