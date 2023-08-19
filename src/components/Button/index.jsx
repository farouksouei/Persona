import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder10: "rounded-[10px]" };
const variants = { OutlineWhiteA700: "border border-solid border-white_A700" };
const sizes = { sm: "p-[9px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder10"]),
  variant: PropTypes.oneOf(["OutlineWhiteA700"]),
  size: PropTypes.oneOf(["sm"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
