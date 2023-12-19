import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function Slider() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <>
      <div className="text-center text-3xl font-semibold my-10">
        Most Voted Surveys
      </div>
      {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <p>{item.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper> */}

      <div className="flex md:grid md:grid-cols-2  lg:grid-cols-3  overflow-x-scroll  gap-4 p-2">
        {data.map((item, idx) => {
          return (
            
              <div key={idx} className="card w-96 bg-base-100 shadow-xl mx-auto group flex min-w-[70vw] flex-1 cursor-pointer flex-col gap-3 border-y border-border10 py-3 xs:min-w-[55vw] xssm:min-w-[35vw] sm:min-w-[28vw] md:min-w-0">
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <p>{item.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            
          );
        })}
      </div>
    </>
  );
}
