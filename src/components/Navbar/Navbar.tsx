"use client";
import Image from "next/image";
import Link from "next/link";
import blueLogo from "../../assets/img/blueLogo.png";
import styles from "./styles.module.scss";
import { BarChart2, CircleGauge, User, LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";

const icons: { [key: string]: LucideIcon } = {
  "/": CircleGauge,
  "/leaderboard": BarChart2,
  "/profile": User,
};

const links = [
  { href: "/", label: "Dashboard" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/profile", label: "Profile" },
];

export function Navbar() {
  const pathName = usePathname();

  return (
    <div className="h-screen flex flex-col gap-16 justify-start items-center border-r p-10">
      <div className="w-full flex gap-6 justify-start items-center">
        <Image src={blueLogo} alt="Logo da Blue" className="rounded-lg" />
        <h1 className="text-3xl">Blue</h1>
      </div>
      <div className="flex flex-col gap-4">
        {links.map((link) => {
          const Icon = icons[link.href];
          return (
            <Link
              href={link.href}
              key={link.href}
              className={`${styles.link} ${
                pathName === link.href && "bg-[#2500ff]"
              } flex items-center gap-2`}
            >
              <Icon size={24} color="white" />
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
