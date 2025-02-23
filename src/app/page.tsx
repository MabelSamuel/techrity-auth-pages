import Button from "@/app/components/Button";
import Title from "@/app/components/Title";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pl-[218px] pt-[240px] pb-[223px] pr-[352px] h-full">
      <div className="mx-[35.5px] mb-[35px] space-y-[40px]">
        <Title content="Sign Up to Techrity" />
        <div className="space-y-[16px]">
          <label
            htmlFor=""
            className="font-adamina text-[20px] text-neutral block"
          >
            Continue with email
          </label>
          <input
            type="email"
            className="w-full px-[24px] py-[16px] border border-secondary100 rounded-[8px] focus:outline-none focus:border-primary"
            placeholder="example@gmail.com"
          />
        </div>
        <Button content="Sign up" />
      </div>
      <div className="space-y-[32px] text-secondary100 ">
        <p className="text-center">
          By creating an accounting you agree with our Terms of Services,
          Privacy Policy, and our default Newsletters.{" "}
        </p>
        <div className="flex space-x-[8px] text-[20px] justify-center">
          <span>Already have an account ?</span>
          <Link href="/login" className="font-medium underline text-black">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
