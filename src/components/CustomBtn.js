import React from "react";

const CustomBtn = ({
  children,
  text,
  handleClick = null,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`text-md bg-black dark:bg-white text-white dark:text-black sm:w-44 max-w-smff w-full h-11 rounded-md border border-transparent transition-colors hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-black hover:border-black dark:hover:border-white font-semibold tracking-wide flex flex-row items-center justify-center gap-4`}
    >
      {children}
      {text}
    </button>
  );
};

export default CustomBtn;
