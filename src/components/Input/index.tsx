import { InputHTMLAttributes } from "react";
import { CiSearch } from "react-icons/ci";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input(props: InputProps) {
  return (
    <div className="w-full h-fit relative">
      <input
        {...props}
        type="search"
        className="h-9 w-full rounded-md bg-500 px-3 focus:outline-none focus:outline-2 focus:outline-Primary txt-100 placeholder:txt-300 search-input"
      />
      <CiSearch className="txt-100 text-2xl absolute right-3 top-1/2 -translate-y-1/2" />
    </div>
  );
}

export { Input };
