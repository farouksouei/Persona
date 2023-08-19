import React from "react";

const variantClasses = {
  h1: "sm:text-[32px] md:text-[38px] text-[42px]",
  h2: "font-normal sm:text-4xl md:text-[38px] text-[40px]",
  h3: "font-normal md:text-3xl sm:text-[28px] text-[32px]",
  h4: "font-normal text-3xl sm:text-[26px] md:text-[28px]",
  h5: "text-2xl md:text-[22px] sm:text-xl",
  h6: "font-normal text-xl",
  body1: "font-medium text-lg",
  body2: "font-normal text-base",
  body3: "font-normal text-sm",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
