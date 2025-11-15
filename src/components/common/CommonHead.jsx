import React from "react";

const CommonHead = ({ h2 }) => {
  return (
    <>
      <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-bold font-poppins text-main leading-[1.05]">
        {h2}
      </h2>
    </>
  );
};

export default CommonHead;
