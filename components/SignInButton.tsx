"use client";

import React from "react";
import { Button } from "./ui/button";
import GoogleIcon from "@/icons/google.svg";
import { signIn } from "next-auth/react";

function SignInButton() {
  return (
    <Button
      onClick={() => signIn("google", { callbackUrl: "/" })}
      className="w-full hover:cursor-pointer blue-color-bg font-semibold text-white flex gap-2 items-center"
    >
      <GoogleIcon className="!h-6 !w-6" />
      Sign in with Google
    </Button>
  );
}

export default SignInButton;
