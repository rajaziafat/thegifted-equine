import Heading from "../Components/Heading/Heading";
import Helmet from "../Components/Helmet/Helmet";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { Autoplay, FreeMode } from "swiper/modules";
const Gallery = () => {
  return (
    <div className="pb-10">
      <Helmet>
        <Heading text="Gallery" />
      </Helmet>
      <div className="w-full mt-10">
        <Swiper
          slidesPerView={"auto"}
          loop={true}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 900 }}
          speed={1800}
          modules={[FreeMode, Autoplay]}
          className="mySwiper w-full h-full"
        >
          <SwiperSlide className="!w-[300px] h-[350px]">
            <GalleryCards img="./p4.webp" />
          </SwiperSlide>
          <SwiperSlide className="!w-[300px] h-[350px]">
            <GalleryCards img="./p7.webp" />
          </SwiperSlide>
          <SwiperSlide className="!w-[300px] h-[350px]">
            <GalleryCards img="./p10.webp" />
          </SwiperSlide>
          <SwiperSlide className="!w-[300px] h-[350px]">
            <GalleryCards img="./p12.webp" />
          </SwiperSlide>
          <SwiperSlide className="!w-[300px] h-[350px]">
            <GalleryCards img="./p14.webp" />
          </SwiperSlide>
          <SwiperSlide className="!w-[300px] h-[350px]">
            <GalleryCards img="./p17.webp" />
          </SwiperSlide>
          <SwiperSlide className="!w-[300px] h-[350px]">
            <GalleryCards img="./p21.webp" />
          </SwiperSlide>
          <SwiperSlide className="!w-[300px] h-[350px]">
            <GalleryCards img="./p22.webp" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
const GalleryCards = (props) => {
  return (
    <div className="w-[300px] h-[350px] overflow-hidden rounded-md">
      <img src={props.img} alt="" className="h-full w-full object-cover" />
    </div>
  );
};

export default Gallery;
