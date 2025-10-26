import React from "react";
import LeftContant from "./LeftContant";
import RightContant from "./RightContant";

const HomeContant = (props) => {
  return (
    <div className=" px-15 pt-8 flex gap-5 h-[85vh]">
      <LeftContant />
      <RightContant Users={props.Users}/>
    </div>
  );
};

export default HomeContant;
