import Image from "next/image";
import React from "react";

export const HeroSection = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-start lg:justify-between gap-8 lg:h-[693px] px-4">
      {/* Heading, text, and button content */}
      <div className="w-full lg:w-[496px] my-auto">
        <h2 className="text-[40px] lg:text-[56px] lg:leading-[56px] leading-[45px] text-black font-normal lg:h-[168px] mb-4 lg:mb-2">
          Accountancy & Taxation, Auditing & Advisory.
        </h2>
        <p className="text-[#4B5563] text-[18px] leading-[28px] font-normal mb-4 lg:h-[84px] lg:mb-8">
          We are a trusted provider of comprehensive accounting, auditing,
          taxation and Global Bookkeeping and reporting services for businesses
          of all sizes.
        </p>
        <button className="bg-[#000000] text-white py-3 px-8 rounded-[100px] font-semibold text-[16px]">
          Schedule a call
        </button>
      </div>
      {/* Image container */}
      <div
        className="w-full lg:w-[559px] h-[558px] bg-no-repeat bg-center flex lg:justify-center lg:items-center relative"
        style={{ backgroundImage: "url(/assets/image-3.png)" }}>
        <div className="lg:h-[516px]">
          <Image
            src={"/assets/image-2.png"}
            alt="hero-section"
            height={516}
            width={394}
          />
        </div>

        <div className="bg-[#E5E7EB]  shadow-md absolute bottom-48 right-20 rounded-[100px] h-[58px] w-[213px] flex justify-center">
          <p className="text-[#4B5563] font-medium text-[16px] flex items-center">
            <Image
              src={"/assets/group-4.png"}
              height={40}
              width={40}
              alt="question?"
              className="mr-2"
            />
            Need a Consultation?
          </p>
        </div>
      </div>

      {/* carousel */}
    </div>
  );
};
