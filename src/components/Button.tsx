import classNames from "classnames";
import { ComponentProps } from "react";
import "../../src/index.css";
// import './button.css';

interface ButtonProps extends ComponentProps<"button"> {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  label,
  ...props
}: ButtonProps) => {


  return (
    <button
      type="button"
      {...props}
      className={classNames(
        "rcl-button font-nunito-sans font-bold border-0 rounded-full cursor-pointer inline-block",
        props.className
      )}
    >
      {label}
    </button>
  );
};
