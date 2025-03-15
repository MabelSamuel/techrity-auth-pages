import Title from "@/app/components/Title";
import Image from "next/image";

export default function page() {
  return (
    <div className="pl-[218px] pt-[152px] pb-[132px] pr-[336px] h-full">
      <Image
        src="/assets/ArrowLeftBlack.png"
        alt="Back to website"
        width="32"
        height="32"
      />
      <div className="mt-[48px] space-x-[40px]">
        <Title content="Sign Up to Techrity"/>
        <div>

        </div>
      </div>
    </div>
  );
}
