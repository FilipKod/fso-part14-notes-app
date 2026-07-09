"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <nav>
      <Link href={"/"}>home</Link>
      {" | "}
      <Link href={"/notes"}>notes</Link>
      {" | "}
      <Link href={"/users"}>users</Link>
      {" | "}
      {session ? (
        <>
          <Link href={"/notes/new"}>create note</Link>
          {" | "}
          <em>{session.user?.name} logged in</em>{" "}
          <button onClick={() => signOut()}>logout</button>
        </>
      ) : (
        <>
          <Link href={"/login"}>login</Link>
          {" | "}
          <Link href={"/register"}>register</Link>
        </>
      )}
    </nav>
  );
}
