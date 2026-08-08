"use client";
import Link from "next/link";
import React from "react";
import { CircleUser, UserStar, Zap } from 'lucide-react';

export default function NavBar(isLoggedIn: { isLoggedIn: boolean }) {

  return (
    <nav className="w-full h-16 bg-white dark:bg-black flex">
      <Link href={"/"} className="font-bold">
      <h2 className="text-2xl font-bold mt-5 ml-5 mb-5 mr-2">
        DE-<span className="text-[#ff7614]">Dash</span>
      </h2>
      </Link>
      <p className="mt-6"><Zap /></p>
    <ul className="flex gap-4 m-6 ml-auto items-center">
      {isLoggedIn ? (
        // WHAT TO SHOW IF LOGGED IN
        <li>
          <Link href={"/admin-dash"} className="relative group flex items-center justify-center rounded-lg hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all">
            <UserStar />
            <span className="absolute top-full mt-2 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-150 origin-top px-2.5 py-1 text-[11px] font-bold bg-zinc-900 dark:bg-zinc-100 border border-zinc-800 dark:border-zinc-200 text-zinc-200 dark:text-zinc-900 rounded-md whitespace-nowrap shadow-xl pointer-events-none">
              Admin-dash
            </span>
          </Link>
          <CircleUser />
        </li>
      ) : (
        // WHAT TO SHOW IF LOGGED OUT
        <>
          <li>
            <Link href={"/login"} className="font-bold">
              Login
            </Link>
          </li>
          <li>
            <Link href={"/signup"} className="font-bold bg-[#ff7614] p-2 rounded-xl text-white">
              Signup
            </Link>
          </li>
        </>
      )}
    </ul>
        </nav>
      );
    }