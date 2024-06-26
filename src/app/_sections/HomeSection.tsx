import { FaHouse } from "react-icons/fa6";

import { SectionComponent } from "@/components/SectionComponent";
import { useLanguageStore } from "@/factory/STORE_FACTORY/impls";

function HomeSection() {
  const { language } = useLanguageStore();

  return (
    <SectionComponent
      id="home"
      icon={FaHouse}
      title={language === "en" ? "Home" : "Início"}
    >
      <div className="flex flex-col justify-center font-semibold">
        <h2 className="sm:text-[28px] md:text-[56px] lg:text-[56px] txt-100">
          {language === "en" ? "Pleno" : "Desenvolvedor Frontend"}
        </h2>
        <h3 className="sm:text-[26px] md:text-[56px] lg:text-[56px] text-Primary -mt-5">
          {language === "en" ? "Frontend Developer" : "Pleno"}
        </h3>
      </div>
      <div className="sm:text-sm md:text-lg lg:text-lg txt-300 lg:w-3/4">
        {language === "en" ? (
          <p>
            As a <span className="txt-100">Pleno Frontend Developer</span>, I
            stand out in creating innovative solutions for desktop, web and
            mobile platforms, exceeding expectations and driving the success of
            each project.
          </p>
        ) : (
          <p>
            Como <span className="txt-100">Desenvolvedor Frontend Pleno</span>,
            destaco-me na criação de soluções inovadoras para plataformas
            desktop, web e mobile, superando expectativas e impulsionando o
            sucesso de cada projeto.
          </p>
        )}
      </div>
    </SectionComponent>
  );
}

export { HomeSection };
