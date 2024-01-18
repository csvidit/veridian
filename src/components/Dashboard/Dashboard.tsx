"use client";

import Image from "next/image";
import PrimaryLink from "../Links/PrimaryLink";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useClerk } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import { ClerkLoaded, ClerkLoading, SignOutButton, useUser } from "@clerk/nextjs";
import BarLoader from "react-spinners/BarLoader";
import { useState } from "react";

export default function Dashboard() {
  const { signOut } = useClerk();
  const user = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  return (
    <section className="w-full min-h-screen flex flex-col space-y-2 lg:space-y-4 justify-center items-center p-24 bg-gray-950 text-gray-100">
      <Image src="/logo.svg" width={32} height={32} alt="Veridian Logo" />
      <h1 className="text-2xl lg:text-4xl text-emerald-500">Dashboard</h1>
      <ClerkLoaded>
        <p className="">Welcome to Veridian, {user?.user?.firstName}</p>
      </ClerkLoaded>
      <ClerkLoading>
        <BarLoader
          color={"#10b981"}
          loading={loading}
          aria-label="Loading bar"
          data-testid="loader"
        />
      </ClerkLoading>
      <SignOutButton signOutCallback={() => signOut()}>
        <PrimaryButton onClick={() => {}}>Sign Out</PrimaryButton>
      </SignOutButton>
    </section>
  );
}
