import { getLogoData } from "@/services/get-logo";
import Image from "next/image";

const Logo = async () => {
  const { title, subtitle, image } = await getLogoData();
  return (
    <div className="flex sm:h-full items-center">
      <Image
        alt="logo image"
        priority
        src={image}
        width={500}
        height={500}
        className="w-[45px]"
      />
      <div>
        <span className="font-bold text-[#00BC7D] text-[24px] relative left-0 top-0 uppercase">
          {title}
        </span>
        <span className="relative -left-28 top-[12px] uppercase text-[9px] font-semibold text-[#00BC7D]">
          {subtitle}
        </span>
      </div>
    </div>
  );
};

export default Logo;
