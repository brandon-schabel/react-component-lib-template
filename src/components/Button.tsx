import { ComponentProps } from "react";
import "../../src/index.css";

export const buttonVariants = {
  primary: "rcl-button--primary bg-blue-500 hover:bg-blue-700 text-white",
  secondary: "rcl-button--secondary bg-gray-500 hover:bg-gray-700 text-white",
  tertiary: "rcl-button--tertiary bg-white hover:bg-gray-100 text-gray-800",
};

interface ButtonProps extends ComponentProps<"button"> {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: keyof typeof buttonVariants;
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
  size = "medium",
  label,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      {...props}
      className={`rcl-button font-nunito-sans font-bold border-0 rounded-full cursor-pointer inline-block ${
        buttonVariants[variant] || ""
      } ${props.className}`}
    >
      {label}
    </button>
  );
};
