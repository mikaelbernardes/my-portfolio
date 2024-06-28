import { TimelineDot } from "./TimeLineDot";

export interface TimeLineDotLineProps {
  isLast: boolean;
  lineHeight: number | null;
}

function TimeLineDotLine({ isLast, lineHeight }: TimeLineDotLineProps) {
  return (
    <div className="flex flex-col items-center mt-[6px]">
      <TimelineDot />
      {!isLast && (
        <div
          className="w-px absolute bg-TXT300Light dark:bg-TXT300Dark"
          style={{ height: lineHeight ? `${lineHeight + 120}px` : "100%" }}
        ></div>
      )}
    </div>
  );
}

export { TimeLineDotLine };