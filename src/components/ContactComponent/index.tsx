import Link from "next/link";

export interface ContactComponentProps {
  label: string;
  value: string;
  link: string;
}

function ContactComponent({ label, value, link }: ContactComponentProps) {
  return (
    <p className="txt-300 sm:text-sm md:text-lg lg:text-lg">
      {label}:
      <Link
        href={link}
        target="_blank"
        className="txt-100 ml-3 transition-all sm:text-sm md:text-lg lg:text-lg hover:text-Primary"
      >
        {value}
      </Link>
    </p>
  );
}

export { ContactComponent };
