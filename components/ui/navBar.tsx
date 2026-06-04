"use client";
import Link from "next/link";
import React from "react";
import { Zap } from 'lucide-react';

export default function NavBar() {
  return (
    <nav className="w-full h-16 bg-white dark:bg-black flex">
      <Link href={"/"} className="font-bold">
      <h2 className="text-2xl font-bold mt-5 ml-5 mb-5 mr-2">
        DE-<span className="text-[#ff7614]">Dash</span>
      </h2>
      </Link>
      <p className="mt-6"><Zap /></p>
      <ul className="m-6">
        <li>
            <Link href={"/"} className="font-bold">Products</Link>
        </li>
      </ul>
      <ul className="flex gap-4 m-6 ml-auto">
        <li>
          <Link href={"/about"} className="font-bold">FAQ</Link>
        </li>
         <li>
          <Link href={"/about"} className="font-bold">Login</Link>
        </li>
         <li>
          <Link href={"/about"} className="font-bold bg-[#ff7614] p-2 rounded-xl text-white">Signup</Link>
        </li>
      </ul>
    </nav>
  );
}