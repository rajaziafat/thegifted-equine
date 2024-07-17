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
            <GalleryCards img="./s1.webp" />
          </SwiperSlide>
          <SwiperSlide className="!w-[300px] h-[350px]">
            <GalleryCards img="./s1.webp" />
          </SwiperSlide>
          <SwiperSlide className="!w-[300px] h-[350px]">
            <GalleryCards img="./s1.webp" />
          </SwiperSlide>
          <SwiperSlide className="!w-[300px] h-[350px]">
            <GalleryCards img="./s1.webp" />
          </SwiperSlide>
          <SwiperSlide className="!w-[300px] h-[350px]">
            <GalleryCards img="./s1.webp" />
          </SwiperSlide>
          <SwiperSlide className="!w-[300px] h-[350px]">
            <GalleryCards img="./s1.webp" />
          </SwiperSlide>
          <SwiperSlide className="!w-[300px] h-[350px]">
            <GalleryCards img="./s1.webp" />
          </SwiperSlide>
          <SwiperSlide className="!w-[300px] h-[350px]">
            <GalleryCards img="./s1.webp" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
const GalleryCards = (props) => {
  return (
    <div className="w-[300px] h-[350px] overflow-hidden rounded-md">
      <img src={props.img} alt="" className="h-full object-cover" />
    </div>
  );
};

export default Gallery;
