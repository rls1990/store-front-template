import { SocialNetworksData } from "@/services/get-social-networks";
import Image from "next/image";
import { FC } from "react";

interface SocialNetwoksTopProps {
  items: SocialNetworksData[];
  className?: string;
}

const SocialNetwoksTop: FC<SocialNetwoksTopProps> = ({ items, className }) => {
  return (
    <div className={`items-center justify-center gap-4 ${className}`}>
      {items.map((item) => (
        <div key={item.id + Date.now()} className="group relative">
          <a href={item.url}>
            <Image
              src={item.image}
              width={400}
              height={400}
              className="w-[20px] h-[20px]"
              alt="img social networks"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialNetwoksTop;
