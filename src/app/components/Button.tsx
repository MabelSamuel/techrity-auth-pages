import Image from "next/image";
import React from "react";

interface ButtonProps {
  content: string;
  variant?: "primary" | "black" | "grey";
  icon?: boolean;
  altText?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  content,
  variant = "primary",
  icon,
  onClick
}: ButtonProps) {
  return (
    <button
      className={`${
        variant === "black"
          ? "bg-neutral100"
          : variant === "grey"
          ? "bg-secondary200"
          : "bg-primary"
      } rounded-[100px] w-full px-[24px] py-[16px] text-white font-helvetica font-bold text-[20px] flex justify-center items-center space-x-[16px]`}
    onClick={onClick}
    >
      {icon && (
        <Image
          className="h-[18px] w-[18px]"
          src="/assets/google-logo.png"
          alt="google sign up"
          width={18}
          height={18}
        />
      )}
      <span>{content}</span>
    </button>
  );
}
