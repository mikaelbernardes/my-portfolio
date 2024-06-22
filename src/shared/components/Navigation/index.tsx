"use client";
import { useLanguageStore } from "@/shared/stores/useLanguageStore";

import { countryFlag, NavigationItems } from "./data";
import { NavigationItem } from "./NavigationItem";

function Navigation() {
  const { language, toggleLanguage } = useLanguageStore();

  return (
    <nav className="flex flex-col items-center gap-5 py-4 px-1 bg-300 rounded-2xl">
      {NavigationItems.map((item, index) => (
        <NavigationItem
          key={index}
          icon={item.icon}
          name={language === "en" ? item.americanName : item.brazilianName}
        />
      ))}
      <hr className="border w-full border-BG500Light dark:border-BG500Dark" />
      {countryFlag.map((item, index) => (
        <NavigationItem
          key={index}
          icon={item.img}
          name={language === "en" ? item.americanName : item.brazilianName}
          onClick={item.language === language ? () => {} : toggleLanguage}
        />
      ))}
    </nav>
  );
}

export { Navigation };
