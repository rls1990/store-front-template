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
        <span className="font-bold text-emerald-600 text-[24px] relative -left-[6px] top-[1px] uppercase">
          {title}
        </span>
        <span className="relative -left-27 top-[12px] uppercase text-[9px] font-semibold text-emerald-900">
          {subtitle}
        </span>
      </div>
    </div>
  );
};

export default Logo;
