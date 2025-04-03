"use client";

import {
  ArrowLeftStartOnRectangleIcon,
  HomeIcon,
  PencilIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import SideBarNavs from "./SideBarNavs";
import { useAuth } from "@/app/context/AuthContext";
import ButtonIcon from "@/ui/ButtonIcon";
import truncate from "@/utils/truncate";

function SideBar({ onClose }) {
  const { logout, user } = useAuth();
  const logoutHandler = async () => {
    await logout;
  };

  return (
    <div className="flex justify-between flex-col h-screen p-5">
      <div className="overflow-y-auto flex flex-col  pt-10 lg:pt-8">
        {/* Drawer header */}
        <div className="flex items-center  justify-between border-b  border-b-secondary-200 pb-2 mb-6">
          <Link
            href="/"
            className="flex items-center gap-x-4 justify-center text-secondary-700  "
          >
            <HomeIcon className="w-6 h-6" />
            <span> نکست بلاگ</span>
          </Link>
          <ButtonIcon onClick={onClose} variant="outlain" className="block lg:hidden">
            <XMarkIcon />
          </ButtonIcon>
        </div>
        {/* Drawer content */}
        <div className="overflow-y-auto flex-auto">
          <SideBarNavs onClick={onClose}/>
          <div
            // onClick={logoutHandler}
            className="flex items-center gap-x-2 rounded-2xl font-medium transition-all duration-200 text-secondary-700 py-3 px-4 hover:text-red-400 cursor-pointer"
          >
            <ArrowLeftStartOnRectangleIcon className="ml-4 h-5 w-5" />
            <span>خروج</span>
          </div>
        </div>
      </div>
      <Link href="/profile/me">
      <div className="flex items-center justify-between gap-x-2 mb-8 px-4">
        <div className="flex flex-1 items-center">
          <div className="flex items-center justify-center text-center">
            <span className="bg-secondary-400 text-secondary-0 p-2 rounded-full ml-2 border-2 
            border-secondary-200 ring-1 w-[40] h-[40]">{user?.name.split("")[0]}</span>
          </div>
          <div className="flex flex-col mt-1">
            <div className="whitespace-nowrap text-sm font-bold text-secondary-700">{truncate(user?.name ||"",13)}</div>
            <span className="text-secondary-500 text-[14px]">کاربر</span>
          </div>
        </div>
        <div className="border rounded-xl p-2"><PencilIcon className="w-4 h-4" /></div>
      </div>
      </Link>

    </div>
  );
}
export default SideBar;
