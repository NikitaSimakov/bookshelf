"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const UserBar = () => {
  const session = useSession();
  console.log(session);

  return (
    <div>
      {session?.data?.user?.image && (
        <>
          <img
            height={30}
            width={30}
            src={session?.data?.user?.image}
            alt="Profile photo"
          />
          <p>{session?.data?.user?.name}</p>
        </>
      )}
      {session.status === "authenticated" ? (
        <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <Link href="api/auth/signin">Sign In</Link>
      )}
    </div>
  );
};

export default UserBar;
