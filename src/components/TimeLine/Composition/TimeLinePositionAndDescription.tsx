import { useLanguageStore } from "@/factory/STORE_FACTORY/impls";

import { Experience } from "../types";

interface TimeLinePositionAndDescription {
  experience: Experience;
  descriptionRef: React.RefObject<HTMLParagraphElement>;
}

function TimeLinePositionAndDescription({
  descriptionRef,
  experience,
}: TimeLinePositionAndDescription) {
  const { language } = useLanguageStore();
  return (
    <div className="flex flex-col -mt-1">
      <h4 className="font-medium lg:text-[26px] txt-100">
        {language === "en" ? experience.positionEN : experience.positionPT}
      </h4>
      <p
        ref={descriptionRef}
        className="font-light lg:text-base txt-300 sm:w-full w-80"
      >
        {language === "en"
          ? experience.descriptionEN
          : experience.descriptionPT}
      </p>
    </div>
  );
}

export { TimeLinePositionAndDescription };
