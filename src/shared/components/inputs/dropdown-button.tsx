import { ReactNode, useState } from "react";
import classNames from "classnames";
import { When } from "react-if";

type DropdownButtonProps = {
  className: string;
  placeHolder: ReactNode;
  options?: DropdownOption[] ;
  optionsClassName?: string;
}

export type DropdownOption = {
  placeholder?: ReactNode | string;
  onClick?: () => void;
  className?: string;
}

const DropdownButton = ( {className, optionsClassName, placeHolder, options}: DropdownButtonProps ) => {

  const [show, setShow] = useState<boolean>()

  const optionsValues = options?.map(( option, key ) => {
    return (
      <li key={key} onClick={option.onClick} className={option.className}>
        {option.placeholder}
      </li>)
  })

  return (
    <div onClick={ () => setShow(!show) } className={ classNames(className, "relative whitespace-nowrap cursor-pointer", show ? "rounded-t-2xl" : "rounded-2xl" ) }>
      <div>
        { placeHolder }
      </div>
      <When condition={show}>
        <ul className={classNames(optionsClassName,"absolute z-[1000] grid float-left w-full transition-all list-none overflow-hidden rounded-b-2xl pb-2")}>
          { optionsValues }
        </ul>
      </When>
    </div>
  )
}

export default DropdownButton;