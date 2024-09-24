import clsx from "clsx";
import { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>;

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "flex items-center bg-blue-500 hover:bg-blue-400 active:bg-blue-600 aria-disabled:opacity-50 px-4 rounded-lg h-10 font-medium text-sm text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 aria-disabled:cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
}
