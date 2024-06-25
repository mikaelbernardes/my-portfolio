import { IoMoon, IoSunny } from "react-icons/io5";

import { SectionComponent } from "@/components/SectionComponent";
import { useLanguageStore, useThemeStore } from "@/factory/STORE_FACTORY/impls";

function PerfilSection() {
  const { theme, toggle } = useThemeStore();
  const { language } = useLanguageStore();

  const iconThemeStyle =
    "text-3xl text-Primary absolute right-5 top-5 cursor-pointer transition-all";

  return (
    <SectionComponent id="perfil">
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
            {language === "pt-BR"
              ? "Desenvolvedor Frontend"
              : "Frontend Developer"}
          </h3>
        </div>
      </div>
    </SectionComponent>
  );
}

export { PerfilSection };
