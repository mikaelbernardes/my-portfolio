import { useLanguageStore } from "@/factory/STORE_FACTORY/impls";

import { Experience } from "../types";

interface TimeLineCompanyAndDatesProps {
  experience: Experience;
}

function TimeLineCompanyAndDates({ experience }: TimeLineCompanyAndDatesProps) {
  const { language } = useLanguageStore();
  return (
    <div className="w-60 text-left">
      <h3 className="font-light txt-100 lg:text-xl">{experience.company}</h3>
      <span className="text-sm text-Primary lg:text-base">
        {language === "en" ? experience.dateEN : experience.datePT}
      </span>
    </div>
  );
}

export { TimeLineCompanyAndDates };
