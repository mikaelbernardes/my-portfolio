import Link from "next/link";

import { getIconByName } from "./transformNameInIcon";

interface BlogCardProps {
  title: string;
  icons: string[];
  tags: string[];
  link: string;
}

function BlogCard({ title, icons, tags, link }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${link}`}
      className="bg-500 w-[390px] h-[255px] rounded-md lg:p-5 hover:scale-[1.02] transition-all"
    >
      <div className="h-2/3 w-full flex items-center justify-center lg:gap-2">
        {icons.map((iconName, index) => {
          const iconInfo = getIconByName(iconName);
          if (!iconInfo) return null;
          const { icon: IconComponent, color } = iconInfo;
          return (
            <IconComponent key={index} className="text-7xl" style={{ color }} />
          );
        })}
      </div>
      <h3 className="txt-100 font-semibold text-2xl">{title}</h3>
      <div className="mt-5 flex gap-4">
        {tags.map((tag, index) => (
          <div
            className="bg-Primary txt-100 uppercase w-fit h-fit px-3 py-[2px] rounded-[4px] text-xs"
            key={index}
          >
            {tag}
          </div>
        ))}
      </div>
    </Link>
  );
}

export { BlogCard };
