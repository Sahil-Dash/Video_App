import { cn } from "@/lib/utils";
import Image from "next/image";

import React from "react";

interface HomeCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  action: () => void;
}

const HomeCard = ({
  title,
  description,
  icon,
  color,
  action,
}: HomeCardProps) => {
  return (
    <div
      className={cn(
        " px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px]  rounded-[14px] cursor-pointer",
        color
      )}
      onClick={action}
    >
      <div className="flex-center size-12 glassmorphism">
        <Image src={icon} alt="addMeeting" height={27} width={27} />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className=" text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
