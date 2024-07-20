import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { IconType } from "react-icons";

export interface NavigationItemProps {
  icon: IconType | StaticImport;
  name: string;
  isActive?: boolean;
  link?: string;
  onClick?: () => void;
}

function NavigationItem({
  icon,
  name,
  isActive,
  link,
  onClick,
}: NavigationItemProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isReactIcon = typeof icon === "function";

  const handleClick = (event: React.MouseEvent) => {
    if (link) {
      if (pathname === "/blog") {
        event.preventDefault();
        router.push("/");
      }
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="group relative bg-300 rounded-full" onClick={handleClick}>
      {link ? (
        <div
          className={`transition-all p-2 rounded-full hover:text-Primary dark:hover:text-Primary ${isReactIcon ? "hover:bg-500" : ""} ${isActive ? "bg-500 text-Primary" : "txt-300"} cursor-pointer`}
        >
          <Link href={link}>{content({ icon, name })}</Link>
        </div>
      ) : (
        <div
          className={`transition-all p-2 rounded-full ${isReactIcon ? "hover:bg-500" : ""} txt-300 hover:text-Primary cursor-pointer`}
        >
          {content({ icon, name })}
        </div>
      )}

      <div className="bg-500 p-2 rounded-md group-hover:flex hidden absolute top-1/2 -translate-y-1/2 -left-4 -translate-x-full">
        <p className="txt-100 whitespace-nowrap">{name}</p>
        <div className="bg-500 rotate-45 p-1 absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2" />
      </div>
    </div>
  );
}

function content({
  icon,
  name,
}: {
  icon: IconType | StaticImport;
  name: string;
}) {
  const isReactIcon = typeof icon === "function";
  return isReactIcon ? (
    React.createElement(icon, { className: "text-2xl" })
  ) : (
    <Image src={icon} alt={name} className="w-7 h-7" />
  );
}

export { NavigationItem };
