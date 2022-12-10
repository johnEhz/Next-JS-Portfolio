import { useRouter } from "next/router";
import { IoDiamond } from "react-icons/io5";
import { BiArrowBack } from "react-icons/bi";
import { VscDebugDisconnect } from "react-icons/vsc";
import CustomBtn from "../components/CustomBtn";

export default function Custom404() {
  const router = useRouter();
  return (
    <div className="flex bg-white dark:bg-[#111111] justify-center items-center h-screen min-h-[500px] -mt-16">
      <div className="flex flex-col justify-center items-center gap-6 max-w-xl w-full rounded-md p-8 text-center h-[350px]">
        <div className="flex flex-col items-center">
          <IoDiamond size={60} className="text-red-500" />
          <h1 className="text-6xl font-semibold text-black dark:text-white">404</h1>
        </div>
        <h1 className="text-xl text-red-500 italic flex flex-row items-center gap-2 font-semibold">
          Page not found
          <VscDebugDisconnect size={22} />
        </h1>
        <p className="text-neutral-700 dark:text-slate-300 font-semibold">
          The requested resource was not found on this server, or it may not be
          available right now.
        </p>
        <div className="flex justify-center w-full">
          <CustomBtn
            text="Regresar"
            handleClick={() => router.push("/")}
          >
            <BiArrowBack />
          </CustomBtn>
        </div>
      </div>
    </div>
  );
}
