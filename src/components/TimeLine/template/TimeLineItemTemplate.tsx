import { useEffect, useRef, useState } from "react";

import { TimeLineCompanyAndDates } from "../Composition/TimeLineCompanyAndDates";
import { TimeLineDotLine } from "../Composition/TimeLineDotLine";
import { TimeLinePositionAndDescription } from "../Composition/TimeLinePositionAndDescription";
import { Experience } from "../types";

interface TimelineItemTemplateProps {
  experience: Experience;
  isLast: boolean;
}

function TimelineItemTemplate({
  experience,
  isLast,
}: TimelineItemTemplateProps) {
  const [lineHeight, setLineHeight] = useState<number | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (descriptionRef.current) {
      const descriptionHeight = descriptionRef.current.clientHeight;
      setLineHeight(descriptionHeight);
    }
  }, [experience]);

  return (
    <div className="flex mb-20 w-full relative justify-between">
      <TimeLineCompanyAndDates experience={experience} />
      <TimeLineDotLine isLast={isLast} lineHeight={lineHeight} />
      <TimeLinePositionAndDescription
        descriptionRef={descriptionRef}
        experience={experience}
      />
    </div>
  );
}

export { TimelineItemTemplate };
