"use client";

import { IoMoon, IoSunny } from "react-icons/io5";

import { Navigation } from "@/components/Navigation";
import { SectionComponent } from "@/components/SectionComponent";
import { useThemeStore } from "@/factory/STORE_FACTORY/impls";

export default function Home() {
  const { theme, toggle } = useThemeStore();

  const iconThemeStyle =
    "text-3xl text-Primary absolute right-5 top-5 cursor-pointer transition-all";

  return (
    <main
      className={`w-screen h-screen flex items-center justify-center bg-100 ${theme === "dark" ? "dark" : ""}`}
    >
      <div className="w-screen h-screen flex items-center justify-center bg-100">
        <Navigation />
        <SectionComponent id="home">
          {theme === "dark" ? (
            <IoMoon className={iconThemeStyle} onClick={toggle} />
          ) : (
            <IoSunny className={iconThemeStyle} onClick={toggle} />
          )}
          <div className="flex sm:gap-[10px] md:gap-10 lg:gap-10 items-center">
            <div className="bg-Primary sm:w-[100px] md:w-[160px] lg:w-[160px] sm:h-[100px] md:h-[160px] lg:h-[160px] rounded-full"></div>
            <div className="flex flex-col gap-2">
              <h2 className="sm:text-xl md:text-4xl lg:text-4xl txt-100">
                Mikael Bernardes
              </h2>
              <h3 className="sm:text-sm md:text-[28px] lg:text-[28px] text-Primary">
                Desenvolvedor Frontend
              </h3>
            </div>
          </div>
        </SectionComponent>
      </div>
    </main>
  );
}
