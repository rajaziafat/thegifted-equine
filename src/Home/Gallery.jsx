// import React, { useState } from "react";
// import Heading from "../Components/Heading/Heading";
// import Helmet from "../Components/Helmet/Helmet";
// import GalleryData from "../Data/GalleryData";
// import { FaInstagram } from "react-icons/fa";

// const Gallery = () => {
//   return (
//     <div className="pb-10 gallery">
//       <Helmet>
//         <Heading text="Gallery" />
//         <div className="w-full mt-16 flex flex-wrap sm:gap-y-5">
//           {[0, 4, 8, 12].map((startIdx) => (
//             <div
//               className="flex flex-col gap-y-5 gallery-col lg:items-center"
//               key={startIdx}
//             >
//               {GalleryData.slice(startIdx, startIdx + 4)?.map((item) => (
//                 <GalleryCards key={item.id} {...item} />
//               ))}
//             </div>
//           ))}
//         </div>
//       </Helmet>
//     </div>
//   );
// };

// const GalleryCards = (props) => {
//   // const openInNewWindow = (url) => {
//   //   window.open(url, "_blank", "width=600,height=600");
//   // };
//   const openUrl = (url) => {
//     const userAgent = navigator.userAgent;
//     let instagramAppUrl;

//     // Determine if the URL is for a reel or a post
//     if (url.includes("/reel/")) {
//       const reelId = url.split("/reel/")[1].split("/")[0]; // Extract the reel ID
//       instagramAppUrl = `instagram://reel/${reelId}`;
//     } else {
//       // Fallback to the original URL if it doesn't match
//       instagramAppUrl = url.replace(
//         "https://www.instagram.com/",
//         "instagram://"
//       );
//     }

//     // Check for small device width
//     if (window.innerWidth < 540) {
//       // Attempt to open in Instagram app
//       window.location.href = instagramAppUrl;

//       // Fallback to web browser if the app is not installed
//       setTimeout(() => {
//         window.open(url, "_blank");
//       }, 500);
//     } else {
//       // For larger devices, open in a new tab
//       window.open(url, "_blank", "width=600,height=600");
//     }
//   };
//   return (
//     <div
//       className={`w-[330px] h-[500px] xsm:w-full relative group ${props.height}`}
//       onClick={() => openUrl(props.source)}
//       // onClick={() => openInNewWindow(props.source)}
//       style={{ cursor: "pointer" }}
//     >
//       <button className="absolute top-[60%] left-1/2 -translate-x-1/2 translate-y-1/2 text-4xl text-white opacity-0 group-hover:opacity-100  duration-500 group-hover:!top-1/2">
//         <FaInstagram />
//       </button>
//       <img src={props.img} alt="" className="h-full w-full object-cover" />
//     </div>
//   );
// };

// export default Gallery;

import React, { useState } from "react";
import Heading from "../Components/Heading/Heading";
import Helmet from "../Components/Helmet/Helmet";
import GalleryData from "../Data/GalleryData";
import { FaInstagram } from "react-icons/fa";

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
                <GalleryCards key={item.id} {...item} />
              ))}
            </div>
          ))}
        </div>
      </Helmet>
    </div>
  );
};

const GalleryCards = (props) => {
  const openUrl = (url) => {
    const userAgent = navigator.userAgent;
    let instagramAppUrl;

    // Determine if the URL is for a reel or a post
    if (url.includes("/reel/")) {
      const reelId = url.split("/reel/")[1].split("/")[0]; // Extract the reel ID
      instagramAppUrl = `instagram://reel/${reelId}`;
    } else {
      // Fallback to the original URL if it doesn't match
      instagramAppUrl = url.replace(
        "https://www.instagram.com/",
        "instagram://"
      );
    }

    // Check for small device width
    if (window.innerWidth < 540) {
      // Attempt to open in Instagram app
      window.location.href = instagramAppUrl;

      // Fallback to web browser if the app is not installed
      setTimeout(() => {
        window.open(getModifiedUrl(url), "_blank");
      }, 500);
    } else {
      // For larger devices, open in a new tab
      window.open(getModifiedUrl(url), "_blank", "width=600,height=600");
    }
  };

  const getModifiedUrl = (url) => {
    const postId = url.split("/").pop().split("?")[0];
    return `https://www.instagram.com/p/${postId}/?igshid=1234567890`;
  };

  return (
    <div
      className={`w-[330px] h-[500px] xsm:w-full relative group ${props.height}`}
      onClick={() => openUrl(props.source)}
      style={{ cursor: "pointer" }}
    >
      <button className="absolute top-[60%] left-1/2 -translate-x-1/2 translate-y-1/2 text-4xl text-white opacity-0 group-hover:opacity-100  duration-500 group-hover:!top-1/2">
        <FaInstagram />
      </button>
      <img src={props.img} alt="" className="h-full w-full object-cover" />
    </div>
  );
};

export default Gallery;
