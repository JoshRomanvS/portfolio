import React from "react";
import Image from "next/image";


export default function NavBar() {
  return (
    <div className="w-full h-20 sticky top-0">
        <div className="container flex justify-between items-center h-full px-4">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />

            <p>hello</p>
        </div>
    </div>
  );
}