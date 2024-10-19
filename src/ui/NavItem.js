import React from "react";

const NavItem = ({ itemName, iconClass, image }) => {
  return (
    <div className="lg:flex lg:items-center lg:gap-3 py-2 px-4 rounded-lg lg:rounded-lg hover:bg-gray-900 hover:cursor-pointer">
      {image && (
        <img src="./IMG_4574.JPG" className="rounded-full h-7" alt="username" />
      )}
      {!image && <i className={"text-2xl " + iconClass}></i>}
      <span className="hidden lg:block">{itemName}</span>
    </div>

    // <div className="flex items-center gap-4 hover:bg-gray-900 hover:cursor-pointer p-3 lg:pe-14 pe-3 rounded-lg">
    //   {image && (
    //     <img src="./IMG_4574.JPG" className="rounded-full h-6" alt="username" />
    //   )}
    //   {!image && <i className={"text-2xl " + iconClass}></i>}
    //   <span className="hidden lg:block">{itemName}</span>
    // </div>
  );
};

export default NavItem;
