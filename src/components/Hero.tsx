"use client";

import Image from "next/image";
import { ClerkLoading, useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import PrimaryButton from "./Buttons/PrimaryButton";
import { SignInButton } from "@clerk/nextjs";
import { useState } from "react";
import BarLoader from "react-spinners/BarLoader";

export default function Hero() {
  const router = useRouter();
  const { isLoaded, signIn } = useSignIn();
  let [loading, setLoading] = useState(true);

  return (
    <section className="w-full min-h-screen flex flex-col space-y-2 lg:space-y-4 justify-center items-center p-24 bg-gray-950 text-emerald-500">
      <Image src="/logo.svg" width={32} height={32} alt="Veridian Logo" />
      <h1 className="text-2xl lg:text-4xl">Veridian Comms</h1>
      <p className="text-gray-100">
        An audio and video call service for Vidit & Friends&trade;
      </p>
      <ClerkLoading>
        <BarLoader
          color={"#10b981"}
          loading={loading}
          aria-label="Loading bar"
          data-testid="loader"
        />
      </ClerkLoading>
      <SignInButton mode="modal" redirectUrl="/dashboard">
        <PrimaryButton
          onClick={() => {
            console.log("button clicked");
          }}
        >
          Sign in
        </PrimaryButton>
      </SignInButton>
    </section>
  );
}
