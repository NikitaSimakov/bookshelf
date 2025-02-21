import { authConfig } from "@/config/auth";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Bookshelf",
  description: "Sign in",
};

export default async function Home() {
  // const router = useRouter();
  const session = await getServerSession(authConfig);
  if (session?.user?.email) redirect("/books/all");
  if (!session?.user?.email) redirect("/signin");
  return <></>;
}
