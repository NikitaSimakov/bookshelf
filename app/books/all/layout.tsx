import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookshelf | All books",
};

const AllLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default AllLayout;
