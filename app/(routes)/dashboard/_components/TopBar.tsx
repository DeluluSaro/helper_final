import { Input } from "@/components/ui/input";
import { Search, Ship } from "lucide-react";
import React from "react";

function TopBar() {
  return (
    <div className="">
      <div className="flex justify-between items-center p-5">
        <div className="flex items-center border p-1 rounded-full gap-3 ">
          <Search></Search>
          <Input className="border-none hover:border-none  rounded-full "></Input>
        </div>
        <div className="flex gap-2 bg-[#7fff00] p-2 rounded-full text-white hover:shadow-lg font-bold text-xs items-center hover:shadow-[#7acb7ab6] cursor-pointer">
          <Ship></Ship>
          <p className="">Join Membership for $9</p>
        </div>
        
      </div>

      <hr  className="border border-[#7fff00]"/>


    </div>
  );
}

export default TopBar;
