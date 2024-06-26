import { IconType } from "react-icons";

interface SectionComponentProps {
  title?: string;
  icon?: IconType;
  id: string;
  children: React.ReactNode;
}

function SectionComponent({
  title,
  icon: Icon,
  id,
  children,
}: SectionComponentProps) {
  return (
    <section
      id={id}
      data-testid={id}
      className="flex flex-col sm:p-5 md:p-10 lg:p-[60px] sm:w-full md:w-[664px] lg:w-[960px] h-fit bg-300 md:rounded-[14px] lg:rounded-[14px] sm:gap-5 md:gap-10 lg:gap-10 relative"
    >
      {title && Icon && (
        <div
          className={`
          w-fit h-fit sm:px-[10px] sm:py-1 md:px-[10px] md:py-[6px]
          lg:px-[10px] lg:py-[6px] gap-[10px] rounded-md border border-TXT300Light dark:border-TXT300Dark flex items-center
        `}
        >
          <Icon className="sm:text-[16px] md:text-[26px] lg:text-[26px] text-Primary" />
          <p className="txt-300 sm:text-xs md:text-lg lg:text-lg">{title}</p>
        </div>
      )}
      {children}
    </section>
  );
}

export { SectionComponent };
