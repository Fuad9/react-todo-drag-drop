import React from "react";

const Card = (props) => {
   const dragStart = (e) => {
      const target = e.target;

      e.dataTransfer.setData("card_id", target.id);
   };

   const dragOver = (e) => {
      e.stopPropagation();
   };

   return <div onDragStart={dragStart} onDragOver={dragOver}></div>;
};

export default Card;
