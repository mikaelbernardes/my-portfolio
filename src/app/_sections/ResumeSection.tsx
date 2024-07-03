import { FaFolderOpen } from "react-icons/fa";

import { SectionComponent } from "@/components/SectionComponent";
import { TimelineTemplate } from "@/components/TimeLine/template/TimeLineTemplate";
import { useLanguageStore } from "@/factory/STORE_FACTORY/impls";

import { experiencesData } from "./ResumeData";

function ResumeSection() {
  const { language } = useLanguageStore();

  return (
    <SectionComponent
      id="resume"
      icon={FaFolderOpen}
      title={language === "en" ? "Resume" : "Currículo"}
    >
      <div className="sm:text-[28px] md:text-[56px] lg:text-[56px] txt-100 font-light">
        {language === "en" ? (
          <h2>
            Professional{" "}
            <span className="text-Primary font-semibold">Experience</span>
          </h2>
        ) : (
          <h2>
            Experiência{" "}
            <span className="text-Primary font-semibold">Profissional</span>
          </h2>
        )}
      </div>
      {language === "en" ? (
        <p className="txt-300">
          <span className="txt-100">Specialist in software development</span>,
          experienced leader, and highly qualified.{" "}
          <span className="txt-100">Strong in team leadership</span> and{" "}
          <span className="txt-100">complex project management</span>,
          consistently delivering{" "}
          <span className="txt-100">high-quality results</span>.
        </p>
      ) : (
        <p className="txt-300">
          <span className="txt-100">
            Especialista em desenvolvimento de software
          </span>
          , líder experiente e altamente qualificado.{" "}
          <span className="txt-100">Forte em liderança de equipes</span> e{" "}
          <span className="txt-100">gestão de projetos complexos</span>, sempre
          entregando{" "}
          <span className="txt-100">resultados de alta qualidade</span>.
        </p>
      )}
      <TimelineTemplate data={experiencesData} />
    </SectionComponent>
  );
}

export { ResumeSection };
