"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

export default function Skills() {
  const skills = [
    { src: "/assets/images/html-logo.png", alt: "HTML" },
    { src: "/assets/images/css-logo.png", alt: "CSS" },
    { src: "/assets/images/js-logo.png", alt: "JavaScript" },
    { src: "/assets/images/python.png", alt: "Python" },
    { src: "/assets/images/flutter-svgrepo-com.png", alt: "Flutter" },
    { src: "/assets/images/next-dot-js-svgrepo-com.png", alt: "Next.js" },
    { src: "/assets/images/tailwindcss-svgrepo-com.png", alt: "TailwindCSS" },
  ];

  // helper: split array into chunks of size n (TSX-safe function syntax)
  function chunk<T>(arr: T[], size: number): T[][] {
    const res: T[][] = [];
    for (let i = 0; i < arr.length; i += size) res.push(arr.slice(i, i + size));
    return res;
  }

  const pages = chunk(skills, 5);

  return (
    <section id="skills" className="mt-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <div className="mb-6">
          <div className="inline-flex flex-col justify-start items-start gap-0.5">
            <h2 className="text-xl text-black font-semibold">Languages and Frameworks</h2>
            <div className="w-72 h-0 rounded-lg outline outline-2 outline-offset-[-1px] outline-[#d3d3d3]" />
          </div>
        </div>

        {/* Swiper: each slide is a page containing up to 5 items */}
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={40}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={false}
          grabCursor={true}
          className="w-full"
        >
          {pages.map((page, pIndex) => (
            <SwiperSlide key={pIndex} className="py-4">
              <div className="w-full grid grid-cols-5 place-items-center gap-10">
                {page.map((skill, i) => (
                  <Image
                    key={i}
                    src={skill.src}
                    alt={skill.alt}
                    width={65}
                    height={65}
                    className="object-contain"
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
