import React from "react";
import MenuBar from "../../../components/FormSchema/MeunBar";

export const Header: React.FC = () => {
  return (
    <div className="flex justify-center  items-center px-2 py-3 bg-gray-100 border-b border-gray-300">
      <div className="flex items-center lg:space-x-96  gap-28">
        <h1 className="font-semibold text-xl text-black">Logo</h1>
        <h1 className="text-xl font-bold ">Admin</h1>
        <MenuBar />
      </div>
    </div>
  );
};
