import React from "react";

import { Experience } from "../types";
import { TimelineItemTemplate } from "./TimeLineItemTemplate";

interface TimelineTemplateProps {
  data: Experience[];
}

function TimelineTemplate({ data }: TimelineTemplateProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0 w-px left-40"></div>
      {data.map((experience, index) => (
        <TimelineItemTemplate
          key={index}
          experience={experience}
          isLast={index === data.length - 1}
        />
      ))}
    </div>
  );
}

export { TimelineTemplate };
