import { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
}

const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button className={ classNames("outline-none",className)} {...props}>
      { children }
    </button>
  )
}

export default Button;