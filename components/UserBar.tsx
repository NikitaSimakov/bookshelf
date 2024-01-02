"use client";

// import { auth } from "@/app/firebase/config";
// import { useAuthState } from "react-firebase-hooks/auth";
import SignOutButton from "./SignOut";

const UserBar = () => {
  // const [user, loading] = useAuthState(auth);
  // console.log(user);
  return (
    <div>
      {/* {user?.displayName}
      {user && <SignOutButton />} */}
    </div>
  );
};

export default UserBar;
