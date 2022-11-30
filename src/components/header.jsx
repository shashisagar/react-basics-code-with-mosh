import React from "react";
const Header = ({ totalCounters }) => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-400 p-6 mb-8">
        <div className="block flex-grow justify-between flex items-center w-auto">
          <div className="text-sm bg-red-500 font-bold text-xs m-2 px-2 py-1 rounded-full">
            {totalCounters}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;