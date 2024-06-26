import { FaUser } from "react-icons/fa6";

import { SectionComponent } from "@/components/SectionComponent";
import { useLanguageStore } from "@/factory/STORE_FACTORY/impls";

function AboutSection() {
  const { language } = useLanguageStore();

  return (
    <SectionComponent
      id="about"
      icon={FaUser}
      title={language === "en" ? "About me" : "Sobre mim"}
    >
      <div className="sm:text-[28px] md:text-[56px] lg:text-[56px] txt-100 font-light">
        {language === "en" ? (
          <h2>
            About <span className="text-Primary font-semibold">me</span>
          </h2>
        ) : (
          <h2>
            Sobre <span className="text-Primary font-semibold">mim</span>
          </h2>
        )}
      </div>
      <p className="sm:text-sm md:text-lg lg:text-lg txt-300">
        {language === "en" ? (
          <p>
            Mikael, a <span className="txt-100">Full Stack Developer</span>
            passionate about challenges and driven by the creation of innovative
            digital solutions. He has complemented his education with various
            renowned courses, including{" "}
            <span className="txt-100">Rocketseat</span>,{" "}
            <span className="txt-100">Alura</span>,{" "}
            <span className="txt-100">Udemy</span>, and
            <span className="txt-100">DevQuest</span>, all focused on{" "}
            <span className="txt-100">Javascript</span>,{" "}
            <span className="txt-100">Typescript</span>,{" "}
            <span className="txt-100">React</span>,{" "}
            <span className="txt-100">React Native</span>,{" "}
            <span className="txt-100">NodeJS</span>, and{" "}
            <span className="txt-100">NextJS</span>.
            <br />
            <br /> As a <span className="txt-100">Full Stack Developer</span>,
            Mikael has extensive practical experience in creating{" "}
            <span className="txt-100">mobile</span>,
            <span className="txt-100">desktop</span>, and{" "}
            <span className="txt-100">web applications</span> using TypeScript
            for both <span className="txt-100">frontend</span> and{" "}
            <span className="txt-100">backend</span> development. His
            exceptional skills in{" "}
            <span className="txt-100">API integration</span>,{" "}
            <span className="txt-100">building complex data structures</span>,
            and <span className="txt-100">developing customized solutions</span>{" "}
            are widely recognized. Mikael stands out for his ability to tackle
            complex technological challenges, demonstrating a commitment to
            <span className="txt-100">innovation</span>,{" "}
            <span className="txt-100">flexibility</span>, and delivering{" "}
            <span className="txt-100">high-quality results</span>. <br /> <br />{" "}
            He is constantly seeking to expand his knowledge in{" "}
            <span className="txt-100">TypeScript</span> and
            <span className="txt-100">JavaScript</span>, with an unwavering
            passion for tackling complex challenges. Recognized for his{" "}
            <span className="txt-100">exceptional performance</span> in{" "}
            <span className="txt-100">dynamic teams</span>, Mikael combines a
            <span className="txt-100">solid academic background</span>,{" "}
            <span className="txt-100">practical experience</span>, and a true{" "}
            <span className="txt-100">passion for innovation</span>. He is
            prepared to contribute significantly with diverse skills and
            valuable knowledge in any professional environment.
          </p>
        ) : (
          <p>
            Mikael é um{" "}
            <span className="txt-100">Desenvolvedor Full Stack</span> apaixonado
            por desafios e movido pela criação de soluções digitais inovadoras.
            Ele complementou sua formação com diversos cursos renomados,
            incluindo <span className="txt-100">Rocketseat</span>,{" "}
            <span className="txt-100">Alura</span>,{" "}
            <span className="txt-100">Udemy</span> e{" "}
            <span className="txt-100">DevQuest</span>, todos focados em
            <span className="txt-100">Javascript</span>,{" "}
            <span className="txt-100">Typescript</span>,{" "}
            <span className="txt-100">React</span>,{" "}
            <span className="txt-100">React Native</span>,
            <span className="txt-100">NodeJS</span> e{" "}
            <span className="txt-100">NextJS</span>. <br />
            <br /> Como{" "}
            <span className="txt-100">Desenvolvedor Full Stack</span>, Mikael
            possui ampla experiência prática na criação de aplicações{" "}
            <span className="txt-100">móveis</span>,{" "}
            <span className="txt-100">desktop</span> e{" "}
            <span className="txt-100">web</span>, utilizando{" "}
            <span className="txt-100">TypeScript</span> tanto no
            <span className="txt-100">frontend</span> quanto no{" "}
            <span className="txt-100">backend</span>. Suas habilidades
            excepcionais em <span className="txt-100">integração de APIs</span>,{" "}
            <span className="txt-100">
              construção de estruturas de dados complexas
            </span>{" "}
            e{" "}
            <span className="txt-100">
              desenvolvimento de soluções personalizadas
            </span>{" "}
            são amplamente reconhecidas. Mikael se destaca por sua capacidade de
            enfrentar desafios tecnológicos complexos, demonstrando um
            compromisso com a <span className="txt-100">inovação</span>,{" "}
            <span className="txt-100">flexibilidade</span> e entrega de{" "}
            <span className="txt-100">resultados de alta qualidade</span>.{" "}
            <br />
            <br />
            Ele está constantemente buscando expandir seu conhecimento em{" "}
            <span className="txt-100">TypeScript</span>e{" "}
            <span className="txt-100">JavaScript</span>, com uma paixão
            inabalável por enfrentar desafios complexos. Reconhecido por seu
            <span className="txt-100">desempenho excepcional</span> em{" "}
            <span className="txt-100">equipes dinâmicas</span>, Mikael combina
            uma <span className="txt-100">sólida formação</span> por meio de
            cursos, <span className="txt-100">experiência prática</span> e uma
            verdadeira
            <span className="txt-100">paixão pela inovação</span>. Ele está
            preparado para contribuir significativamente com suas diversas
            habilidades e valiosos conhecimentos em qualquer ambiente
            profissional.
          </p>
        )}
      </p>
    </SectionComponent>
  );
}

export { AboutSection };
