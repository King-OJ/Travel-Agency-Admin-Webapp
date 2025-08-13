import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import LogoAndTitle from "@/components/LogoAndTitle";
import GoogleIcon from "@/icons/google.svg";

function Auth() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Image
        src={"/assets/images/auth-img.webp"}
        alt="tourist on a bus"
        fill
        priority
        className="object-cover -z-10"
      />

      <div className="absolute inset-0 bg-white/50 z-0"></div>

      <div className="relative z-10 flex items-center justify-center h-full mx-4 md:mx-0">
        <Card className="w-full max-w-sm bg-white border-0 text-center shadow-2xl">
          <CardHeader className="flex justify-center">
            <LogoAndTitle />
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Admin Dashboard Login</h3>
            <p className="ash-color-text font-figtree">
              Sign in with Google to manage destinations, itenaries, and user
              activity with ease.
            </p>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button className="w-full blue-color-bg font-semibold text-white flex gap-2 items-center">
              <GoogleIcon className="!h-6 !w-6" />
              Sign in with Google
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Auth;
