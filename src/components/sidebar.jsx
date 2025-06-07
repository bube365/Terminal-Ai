import React from "react";
import { BsFillPlusCircleFill, BsChatLeftDots } from "react-icons/bs";
import { GiArtificialHive } from "react-icons/gi";

export const Sidebar = () => {
  return (
    <div className="w-[20%] h-full border-[0.25px] border-[#5d5c5c] p-4">
      <div className="text-white p-1 flex items-center gap-4 justify-center">
        <BsFillPlusCircleFill />
        <p style={{ fontSize: "13px", fontWeight: "600" }}>
          Generate new prompt
        </p>
      </div>{" "}
      <ul className="h-full max-h-[70vh] mt-6 flex flex-col gap-3    overflow-y-scroll">
        {/* <MiaiTitles data={sidebarChatData} /> */}

        <li
          className={`text-[#000] px-2 py-1 rounded-sm bg-[#1b86a8] border border-[#33425d] text-[13px] flex items-center gap-2`}
          onClick={() => {}}
        >
          <BsChatLeftDots />
          Am i eligible for a uk tech visa
        </li>
        <li
          className={`text-[#a8a6a6] text-[13px] flex items-center gap-2`}
          onClick={() => {}}
        >
          <BsChatLeftDots />
          Am i eligible for a uk tech visa
        </li>
        <li
          className={`text-[#a8a6a6] text-[13px] flex items-center gap-2`}
          onClick={() => {}}
        >
          <BsChatLeftDots />
          Am i eligible for a uk tech visa
        </li>
      </ul>
      <div className="border border-[#074377] px-1 py-4 text-[#1ae8ff] text-sm rounded-sm bg-[#33425d]">
        <p className="text-[13px] font-bold text-center">
          Upgrade to Terminal Plus now for advanced features
        </p>
        <p className="text-center mt-2 text-[12px]">Coming soon</p>
      </div>
    </div>
  );
};
