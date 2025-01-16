
import { FiShoppingCart } from "react-icons/fi";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import NavBar from "./navbar";

export default function Header() {
  return (
    <div>
      <header className="w-full h-[132px] bg-blue-200 justify-between items-center">
       
          <div className="hidden md: justify-end">
            <div className="flex justify-start absolute top-10 -translate-y-1/2 ">
              <IoSearchOutline className="text-xl ml-4 " />
              <input className="hidden" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <h1 className=" text-xl text-[#726E8D] sm:text-3xl pt-5">Avion</h1>
          </div>
          <div className="hidden md:block">
          <div className=" flex items-end justify-end  mr-6  top-10 space-x-4">
            <FiShoppingCart className="text-2xl" />
            <RiAccountCircleLine className="text-2xl" />
          </div>
          </div>
        <hr />
        <NavBar />
      </header>
    </div>
  );
}
