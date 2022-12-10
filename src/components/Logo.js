import React from "react";
import Link from "next/link";
import { IoDiamond } from 'react-icons/io5'

const Logo = () => {
  return (
    <Link href="/">
      <a
        className={`cursor-pointer gap-2 items-center inline-flex font-semibold`}
      >
        <IoDiamond size={28} className="animate-pulse text-blue-800"/>
        <h3 className="mr-2 text-2xl dark:text-slate-200">JDev</h3>
      </a>
    </Link>
  );
};

export default Logo;
