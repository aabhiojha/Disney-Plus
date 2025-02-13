import React from "react";
import logo from "./../assets/Disney_wordmark.svg";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";

import { HiPlus, HiDotsVertical, HiStatusOnline } from "react-icons/hi";
import { IconBase } from "react-icons";
import HeaderItem from "./HeaderItem";
import Porfile from "./../assets/profile.svg";
const menu = [
  { name: "HOME", icon: HiHome },
  { name: "SEARCH", icon: HiMagnifyingGlass },
  { name: "WATCH LIST", icon: HiPlus },
  { name: "ORIGINALS", icon: HiStar },
  { name: "MOVIES", icon: HiPlayCircle },
  { name: "SERIES", icon: HiTv },
];

function Header() {
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex items-center gap-8">
        <img src={logo} alt="" className="w-[80px]  object-cover" />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>

        <div className="flex md:hidden gap-8">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={item.name} Icon={item.icon} />
          )}
        </div>

        <div className="md:hidden">
          <HeaderItem name="" Icon={HiDotsVertical} />
        </div>
      </div>
      <div>
        <img src={Porfile} alt="" className="w-[60px] rounded-full" />
      </div>
    </div>
  );
}

export default Header;
