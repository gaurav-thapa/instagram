import React from "react";
import NavItem from "../ui/NavItem";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="order-last sm:order-first sm:p-6 sm:flex sm:flex-col sm:justify-between border-t border-gray-700 sm:border-e">
      <Link to={"/"} className="hidden sm:block sm:w-fit">
        <div className="">
          <div>
            <span>
              <i className="py-2 px-4 hover:bg-gray-900 rounded-lg bi text-2xl bi-instagram lg:hidden"></i>
            </span>
          </div>
          <div>
            <span className="hidden lg:block italic text-2xl p-2">
              Instagram
            </span>
          </div>
        </div>
      </Link>

      <div className="flex gap-1 justify-around items-center py-3 sm:flex-col sm:gap-5 lg:items-start lg:pe-10">
        <Link className="w-full" to="/">
          <NavItem itemName={"Home"} iconClass={"bi bi-house-door"} />
        </Link>
        <Link className="w-full" to="/">
          <NavItem itemName={"Search"} iconClass={"bi bi-search"} />
        </Link>
        <Link className="w-full" to="/">
          <NavItem itemName={"Messages"} iconClass={"bi bi-chat-dots"} />
        </Link>
        <Link className="w-full" to="/">
          <NavItem itemName={"Norification"} iconClass={"bi bi-heart"} />
        </Link>
        <Link className="w-full" to="/create">
          <NavItem itemName={"Create"} iconClass={"bi bi-plus-square"} />
        </Link>
        <Link className="w-full" to={"/profile"}>
          <NavItem itemName={"Profile"} image={"true"} />
        </Link>
      </div>

      <div className="hidden sm:block ">
        <NavItem itemName={"More"} iconClass={"bi bi-list"} />
      </div>
    </div>

    // <div className="h-min flex sm:h-screen text-nowrap items-center sm:flex-col sm:p-6 border-e-2 border-gray-900">
    //   <Link to={"/"} className="hidden sm:block">
    //     <div className="text-2xl lg:text-start text-center italic mt-5 mb-10">
    //       <span>
    //         <i className="lg:hidden bi bi-instagram"></i>
    //       </span>
    //       <span className="hidden lg:block">Instagram</span>
    //     </div>
    //   </Link>

    //   <div className="flex w-full justify-around items-center sm:flex-col gap-1 text-lg">
    //     <Link to="/">
    //       <NavItem itemName={"Home"} iconClass={"bi bi-house-door"} />
    //     </Link>
    //     <Link to=""></Link>
    //     <NavItem itemName={"Search"} iconClass={"bi bi-search"} />
    //     <Link to=""></Link>
    //     <NavItem itemName={"Messages"} iconClass={"bi bi-chat-dots"} />
    //     <Link to=""></Link>
    //     <NavItem itemName={"Norification"} iconClass={"bi bi-heart"} />
    //     <Link to=""></Link>
    //     <NavItem itemName={"Create"} iconClass={"bi bi-plus-square"} />
    //     <Link to={"/profile"}>
    //       <NavItem itemName={"Profile"} image={"true"} />
    //     </Link>
    //   </div>

    //   <div className="hidden sm:block bg-red-400">
    //     <NavItem itemName={"More"} iconClass={"bi bi-list"} />
    //   </div>
    // </div>
  );
};

export default Navbar;
