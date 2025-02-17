import React from "react";

const Label = (props) => {
  return (
    <>
      <div className="flex flex-col w-screen items-center">
        <label className="text-left w-2/3 lg:w-1/4">{props.name}</label>
        <input
          type="text"
          placeholder={props.placeholder}
          className="appearance-none border border-(--color-main) px-3 py-1 w-2/3 lg:w-1/4 rounded-sm focus:outline-hidden"
        />
      </div>
    </>
  );
};

export default Label;
