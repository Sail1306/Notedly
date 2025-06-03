import React from "react";

const Card = ({title, content}) => {
  return (
    <div className="bg-white rounded-lg p-5 text-blue-950 hover:bg-orange-500 h-[180px] hover:text-white">
      <h3 className="text-xl font-semibold pb-4">{title}</h3>
      <p className="text-gray-600 hover:text-white">
        {`${content}`}
      </p>
    </div>
  );
};

export default Card;