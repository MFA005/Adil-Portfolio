"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "PROJECTS", href: "/projects" },
  { name: "SKILLS", href: "/skills" },
  { name: "CONTACT ME", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full px-6 py-6 fixed top-0 z-50">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] -z-10 [mask-image:linear-gradient(to_bottom,black_50%,transparent)]"></div>
      <nav className="flex justify-center items-center mx-auto relative">
        {/* The continuous bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white w-full" />

        <div className="flex gap-10 text-sm text-white relative">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.name} className="relative">
                <Link
                  href={link.href}
                  className={twMerge(
                    "relative z-20 block px-6 py-2 tracking-widest rounded-t-lg transition-colors duration-200",
                    isActive ? "text-white" : "text-white/70 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>

                {isActive && (
                  <motion.div
                    layoutId="activeTabCss"
                    className="absolute inset-0 z-10 bg-gradient-to-b from-white/10 to-[#0E0E0E] border border-white border-b-0 rounded-t-xl"
                    style={{ 
                        bottom: "0",
                        left: "-12px",
                        right: "-12px",
                        top: "-6px"
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  >
                    {/* Left Fillet */}
                    <div className="absolute bottom-0 -left-[10px] w-[10px] h-[10px] overflow-hidden">
                        <div className="absolute bottom-0 right-0 w-[20px] h-[20px] border border-white rounded-full shadow-[4px_4px_0_5px_black] bg-transparent" />
                    </div>
                    {/* Right Fillet */}
                    <div className="absolute bottom-0 -right-[10px] w-[10px] h-[10px] overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-[20px] h-[20px] border border-white rounded-full shadow-[-4px_4px_0_5px_black] bg-transparent" />
                    </div>
                    
                    {/* Cover the bottom line inside the tab */}
                    <div className="absolute bottom-[-2px] left-0 right-0 h-[4px] bg-[#0E0E0E] " />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
