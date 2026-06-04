// src/app/explore/page.tsx
import Image from "next/image";
import { UNIVERSITIES } from "@/data/universities";
import Link from "next/link";

export default function ExploreUnis() {
  return (
    <div className="flex flex-col items-center mt-20 mb-20 px-4 font-sans bg-white dark:bg-zinc-950 transition-colors">
      <header className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-50 tracking-tight">
          Explore Universities
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Discover your ideal university in Germany based on your profile.
        </p>
      </header>
      <div className="w-full max-w-6xl mt-12 px-2">
        <div className="flex overflow-x-auto gap-6 pb-6 mt-10 no-scrollbar scroll-smooth snap-x snap-mandatory">
          {UNIVERSITIES.map((uni) => (
            <Link href={`/university/${uni.id}`} key={uni.id}>
            <div
              key={uni.id}
              className="group relative h-48 w-72 sm:w-80 shrink-0 rounded-xl overflow-hidden shadow-md dark:shadow-black/40 border border-zinc-200/50 dark:border-zinc-800/50 cursor-pointer snap-start"
            >
              <Image
                src={uni.imageSrc}
                alt={uni.imageAlt}
                fill
                sizes="(max-w-7xl) 33vw, (max-w-md) 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                priority={uni.id === "tum"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <p className="text-xs font-bold text-[#ff7614] tracking-wider uppercase mb-1">
                  {uni.city}
                </p>
                <h4 className="font-bold text-lg leading-tight truncate">
                  {uni.name}
                </h4>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
      </div>
  );
}