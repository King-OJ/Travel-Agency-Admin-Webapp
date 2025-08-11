import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

      <div className="relative z-10 flex items-center justify-center h-full">
        <Card className="w-full max-w-sm bg-white border-0 text-center shadow-2xl">
          <CardHeader>
            <CardTitle className="flex w-full justify-center items-center gap-2">
              <Image
                src={"/assets/icons/logo.svg"}
                alt="tourvisto logo"
                priority
                className="h-auto w-auto"
                height={0}
                width={0}
              />
              <h1 className="text-xl font-bold font-serif">Tourvisto</h1>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Admin Dashboard Login</h3>
            <p className="text-sm font-figtree">
              Sign in with Google to manage destinations, itenaries, and user
              activity with ease.
            </p>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button className="w-full bg-blue-500 font-semibold text-white flex gap-2 items-center">
              <Image
                src={"/assets/icons/google.svg"}
                alt="google logo"
                priority
                className="h-auto w-auto"
                height={0}
                width={0}
              />
              Sign in with Google
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Auth;
