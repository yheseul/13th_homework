"use client";

import Image from "next/image";
import Login from "./_components/Login/Login";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-row justify-between">
      <div className="max-w-96">
        <Login onClickSignUp={() => router.push(`/?modal=signup`)} />
      </div>
      <div className="relative w-full h-[700px]">
        <Image src="/pngs/login-signup.png" alt="loginSignUp" fill />
      </div>
    </div>
  );
}
