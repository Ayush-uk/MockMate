import React from "react";
import { useSelector } from "react-redux";
import { FaRobot } from "react-icons/fa";
import { motion } from "motion/react";
import { BsCoin } from "react-icons/bs";

const NavBar = () => {
  const { userData } = useSelector((state) => state.user);
  return (
    <div className=" bg-[#f3f3f3] flex justify-center px-4 pt-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-6xl bg-white rounded-[24px] shadow-sm border-gray-200 px-8 py-4 flex justify-between items-center relative"
      >
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="bg-black text-white p-2 rounded-lg">
            <FaRobot size={18} />
          </div>
          <h1 className="text-xl font-semibold md:block">Inteview.IQ.AI</h1>
        </div>
        <div className="flex items-center gap-6 relative">
          <div className="relative ">
            <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-md hover:bg-gray-200 transition ">
              <BsCoin size={20} />
              {userData?.credits || 0}
            </button>
          </div>
          <div>
            
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NavBar;
