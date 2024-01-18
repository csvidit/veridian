"use client"

import PrimaryButton from "@/components/Buttons/PrimaryButton";
import MainContent from "@/components/Containers/MainContent";
import { SignIn, SignInButton } from "@clerk/nextjs";

const SigninRoute = () => {
  return (
    <MainContent>
      <SignInButton>
        <PrimaryButton
          onClick={() => {
            console.log("button clicked");
          }}
        >Sign In</PrimaryButton>
      </SignInButton>
    </MainContent>
  );
};

export default SigninRoute;
