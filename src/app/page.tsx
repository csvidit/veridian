import Hero from "@/components/Hero";
import { SignOutButton, currentUser, auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {

  const user = await currentUser();

  if(user)
  {
    redirect("/dashboard");
  }


  return (
    <Hero/>
  );
}
