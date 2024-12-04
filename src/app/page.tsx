import React from "react";
import Image from "next/image";
import { NavBar } from "./header";


export default function Page() {
  return (
    <div>
      <NavBar />
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </div>
  );
}
