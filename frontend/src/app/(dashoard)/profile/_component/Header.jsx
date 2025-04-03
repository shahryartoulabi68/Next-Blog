"use client";
import Link from "next/link";
import Avatar from "@/ui/Avatar";
import ButtonIcon from "@/ui/ButtonIcon";
import { useAuth } from "@/app/context/AuthContext";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Drawer from "@/ui/Drawer";
import SideBar from "./SideBar";

function Header() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const { user, isLoading } = useAuth();
  return (
    <header
      className={`bg-secondary-0 ${isLoading ? "bg-opacity-30 blur-md" : ""}`}
    >
      <div className="flex items-center justify-between py-5 px-4 lg:px-8">

        <ButtonIcon
          className={`block lg:hidden`} onClick={() => setIsOpenDrawer(true)} >
          {isOpenDrawer ? <XMarkIcon /> : <Bars3Icon />}
        </ButtonIcon>

        <div className="flex items-center gap-x-3">
          <div className="flex flex-col lg:flex-row justify-start lg:items-center gap-x-2">
            <span className="text-sm lg:text-lg font-bold text-secondary-700">
              سلام؛ {user?.name}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <Link href="/profile">
            <ButtonIcon
              color="outline"
              className={`border-secondaray-200 rounded-2xl flex cursor-pointer items-center`}
            >
              <Avatar src={user?.avatarUrl} />
            </ButtonIcon>
          </Link>
        </div>

        <Drawer onClose={() => setIsOpenDrawer(false)} open={isOpenDrawer}>
          <SideBar onClose={() => setIsOpenDrawer(false)} />
        </Drawer>

      </div>
    </header>
  );
}
export default Header;
