import Image from "next/image"

export default function SideFrame() {
  return (
    <section className="bg-primary text-secondary h-screen flex flex-col justify-between">
      <div className=" font-adamina flex">
        <Image src='/assets/ArrowLeft.png' alt="Bact to website" width='32' height='32' />
        <p>back to website</p>
      </div>
      <div className="font-raleway text-secondary50 flex justify-between">
        <p>Terms & Privacy</p>
        <p>Copyright © 2024 Techrity Inc. All rights reserved.</p>
      </div>
    </section>
  );
}
