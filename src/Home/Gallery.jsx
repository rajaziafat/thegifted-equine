import React, { useState } from "react";
import Heading from "../Components/Heading/Heading";
import Helmet from "../Components/Helmet/Helmet";
import GalleryData from "../Data/GalleryData";
import { FaPlay } from "react-icons/fa";

const Gallery = () => {
  return (
    <div className="pb-10 gallery">
      <Helmet>
        <Heading text="Gallery" />
        <div className="w-full mt-16 flex flex-wrap sm:gap-y-5">
          {[0, 4, 8, 12].map((startIdx) => (
            <div
              className="flex flex-col gap-y-5 gallery-col lg:items-center"
              key={startIdx}
            >
              {GalleryData.slice(startIdx, startIdx + 4)?.map((item) => (
                <GalleryCards
                  key={item.id}
                  {...item}
                  onClick={() => openModal(item.source)}
                />
              ))}
            </div>
          ))}
        </div>
      </Helmet>
    </div>
  );
};

const GalleryCards = (props) => {
  const openInNewWindow = (url) => {
    window.open(url, "_blank", "width=600,height=600");
  };
  return (
    <div
      className={`w-[330px] h-[500px] xsm:w-full relative ${props.height}`}
      onClick={() => openInNewWindow(props.source)}
      style={{ cursor: "pointer" }}
    >
      <button className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 text-4xl text-white">
        <FaPlay />
      </button>
      <img src={props.img} alt="" className="h-full w-full object-cover" />
    </div>
  );
};

export default Gallery;
