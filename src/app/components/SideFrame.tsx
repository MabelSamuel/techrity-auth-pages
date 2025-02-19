"use client";
import Image from "next/image";

export default function SideFrame() {
  const backToWebsite = () => {
    window.location.href = "https://www.techrity.org";
  };
  return (
    <section className="bg-primary text-secondary pl-[227px] pb-[54px] w-[848px] flex flex-col justify-between">
      <button
        className=" font-adamina mt-[144px] flex items-center space-x-4"
        onClick={backToWebsite}
      >
        <Image
          src="/assets/ArrowLeft.png"
          alt="Back to website"
          width="32"
          height="32"
        />
        <p className="text-[20px]">back to website</p>
      </button>
      <div className="font-raleway ml-[2px] mr-[106px] text-secondary50 flex justify-between">
        <p>Terms & Privacy</p>
        <p>Copyright © 2024 Techrity Inc. All rights reserved.</p>
      </div>
    </section>
  );
}
