"use client";
import { useThemeStore } from "@/factory/STORE_FACTORY/impls";

export default function Loading() {
  const { theme } = useThemeStore();
  return (
    <div className={`${theme === "dark" ? "dark" : ""}`}>
      <div className="w-full h-screen flex items-center justify-center bg-100">
        <div className="flex flex-row gap-2">
          <div className="w-4 h-4 rounded-full bg-Primary animate-bounce"></div>
          <div className="w-4 h-4 rounded-full bg-Primary animate-bounce [animation-delay:-.3s]"></div>
          <div className="w-4 h-4 rounded-full bg-Primary animate-bounce [animation-delay:-.5s]"></div>
        </div>
      </div>
    </div>
  );
}
