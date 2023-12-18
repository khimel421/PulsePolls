import React, { useEffect, useState } from "react";

export default function TestiMonials() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("testimonial.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold my-10 text-[#001d21]">
        Testimonials
      </h1>
      <div className="flex md:grid md:grid-cols-3   overflow-x-scroll gap-4 p-2">
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              className="card w-96 bg-base-100 shadow-xl mx-auto group flex min-w-[70vw] flex-1 cursor-pointer flex-col gap-3 border-y border-border10 py-3 xs:min-w-[55vw] xssm:min-w-[35vw] sm:min-w-[28vw] md:min-w-0"
            >
              <div className="card-body ">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <h2 className="card-title">{item.name}</h2>
                <p>{item.text}</p>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
